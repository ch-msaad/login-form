const express = require("express");
const con = require("../db_connection");
const Router = express.Router();
const jwt = require("jsonwebtoken");

Router.get("/", authenticateToken, (req,res)=>{

    var sql="Select * from event";
    con.query(sql, function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})

function authenticateToken(req, res, next) {
  //console.log(req);
  //console.log(res);
  //console.log(next);
  //console.log(req.headers);
  
  const authHeader = req.headers['authorization']
  console.log(authHeader);
  //console.log("Test");

  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)

  if(token == null) 
    {
      return res.sendStatus(401);
    }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403)
      //req.user = user
      next()
  })
}

module.exports = Router;