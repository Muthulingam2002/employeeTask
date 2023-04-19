const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "kalam",
    port: 5432,
    database: "task",
});

app.post("/", async (req, res) => {
    const { name, dob, email, gender, qualification, mobile, pastexp, doj } =
        req.body;
    console.log(req.body);
    try {
        const response = await pool.query(
            "insert into employee(name, dob, email, gender, qualification, mobile, pastexp, doj) values($1,$2,$3,$4,$5,$6,$7,$8)",
            [name, Number(dob), email, gender, qualification, mobile, Number(pastexp), Number(doj)]
        );
    } catch (err) {
        console.log(err)
    }
});

app.get("/", async (req, res) => {
    try {
        const data = await pool.query("select * from employee");
        res.json(data.rows);
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, () => {
    console.log("server is running at port 3000");
});
