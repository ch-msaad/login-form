const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.put('/:id', (req, res) => {

    console.log(req.body);
    const { id } = req.params;
    var sql = "UPDATE ticket SET ? WHERE id=?";
    con.query(sql, [req.body,id], (error, rows) => {
        if (error) console.log(error);
        else {
            res.send(rows);
        }
    })
});