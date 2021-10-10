const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

Router.get("/", (req,res)=>{
    var sql="Select * from user";
    con.query(sql, function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})

module.exports = Router;