const { async } = require("@angular/core/testing");
const express = require("express");
const con = require("../db_connection");
const bcrypt = require("bcrypt");
const Router = express.Router();



Router.post("/", async(req,res)=>{
try{
  console.log(req.body.email);
    const hash = await bcrypt.hash(req.body.password, 10)
    console.log(hash);
    var sql="INSERT INTO user(Username, Email, Password) values (?,?,?)";
    con.query(sql, [req.body.username, req.body.email, hash], function (error, rows){
      if (error){
        console.log(error);
        res.send(error);
      } 
      console.log(rows)
      res.send(rows)
      })
}
catch(error){
  console.log(error);
}
})

module.exports = Router;