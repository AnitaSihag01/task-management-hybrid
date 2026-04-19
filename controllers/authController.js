const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
        [email, hashedPassword]
    );

    res.json(result.rows[0]);
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    if (result.rows.length === 0) {
        return res.status(400).send('User not found');
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).send('Invalid password');
    }

    const token = jwt.sign(
        { id: user.id },
        'secretkey',
        { expiresIn: '1h' }
    );

    res.json({ token });
};