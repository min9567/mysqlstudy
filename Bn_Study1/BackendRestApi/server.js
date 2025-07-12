const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alsl9567#',
    database: 'testdb'
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) res.status(500).json({ error: err })
        res.json(result);
    });
});

app.post('/users', (req, res) => {
    const { username, email } = req.body;
    db.query(
        'INSERT INTO users (uuid, username, email) VALUES (UUID(), ?, ?)',
        [username, email],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ success: true });
        }
    );
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});