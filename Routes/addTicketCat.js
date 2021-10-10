const express = require("express");
const con = require("../db_connection");
const Router = express.Router();



Router.post("/", (req,res)=>{

  console.log(req.body);

    var sql="INSERT INTO ticket_category SET ?";
    con.query(sql, req.body, function (err, rows){
        if (err){
          console.log(err);
          res.send(err);
        } 
        console.log(rows)
        res.send(rows)
      })
})

module.exports = Router;