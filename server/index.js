const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "nft"
})

app.get("/BasicInfo", (req, res) => {
    db.query("SELECT * FROM basic_settings WHERE language_id = 169", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.get("/getPartners", (req, res) => {
    db.query("SELECT * FROM partners WHERE language_id = 169", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.get("/getPoints", (req, res) => {
    db.query("SELECT * FROM points WHERE language_id = 169", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.get("/getFeatures", (req, res) => {
    db.query("SELECT * FROM features WHERE language_id = 169", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})