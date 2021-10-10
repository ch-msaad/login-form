const express = require("express");
const con = require("../db_connection");
const Router = express.Router();



Router.post("/", (req,res)=>{

  console.log(req.body);

    var sql="INSERT INTO event SET ?";
    con.query(sql, req.body, function (err, rows){
        if (err){
          console.log(err);
        } 
        console.log(rows)
        res.send(rows)
      })
})

module.exports = Router;