const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;
try{
    Router.put('/:sno', (req, res) => {
    
        console.log(req.body);
        const { sno } = req.params;
        var sql = "UPDATE event SET ? WHERE sno=?";
        con.query(sql, [req.body,sno], (error, rows) => {
            if (error) {
                console.log(error);
            }
            else {
                res.send(rows);
            }
        })
    });
}
catch (error) {
    console.log("Server Error!!!");
  }