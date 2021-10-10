const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.put('/:Category_ID', (req, res) => {

    console.log(req.body);
    const { Category_ID } = req.params;
    var sql = "UPDATE ticket_Category SET ? WHERE Category_ID=?";
    con.query(sql, [req.body,Category_ID], (error, rows) => {
        if (error) console.log(error);
        else res.send(rows);
    })
});