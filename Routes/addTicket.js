const express = require("express");
const con = require("../db_connection");
const Router = express.Router();



Router.post("/", (req,res)=>{

  console.log(req.body);

    var sql1=`SET FOREIGN_KEY_CHECKS=0;`;
    var sql=`INSERT INTO ticket SET ?;`;
              con.query(sql1, req.body, function (err, rows){})
    con.query(sql, req.body, function (err, rows){
        if (err){
          console.log(err);
        } 
        console.log(rows)
        res.send(rows)
      })
})

module.exports = Router;