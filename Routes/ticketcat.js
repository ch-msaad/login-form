const express = require("express");
const con = require("../db_connection");
const Router = express.Router();
const jwt = require("jsonwebtoken");

Router.get("/", (req,res)=>{

    var sql="Select * from ticket_category";
    con.query(sql, function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})


module.exports = Router;