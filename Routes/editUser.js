const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.put('/:User_ID', (req, res) => {

    console.log(req.body);
    const { User_ID } = req.params;
    var sql = "UPDATE user SET ? WHERE User_ID=?";
    con.query(sql, [req.body, User_ID], (error, rows) => {
        if (error) {
            console.log(error);
            res.send(error);
        }    
        else{    
            res.send(rows);
        } 
    })
});