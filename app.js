const express = require('express');
const connectMongo = require('./config/mongo');
const pool = require('./config/db');
const auth = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();


connectMongo(); 


app.use(express.json());


app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/profile', auth, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});