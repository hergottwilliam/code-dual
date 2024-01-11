const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "codedual_user",
    password: "pizz@GoldF1sh",
    database: "codedual_db"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?,?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    console.log(sql, values);
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error', mysqlError: err });
        }
    
        console.log('User successfully inserted:', data);
        return res.json(data);
    });
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
})

app.listen(8080, () => {
    console.log("listening on port 8080");
})