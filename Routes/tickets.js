const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

Router.get("/:Event_ID", (req,res)=>{
    const {Event_ID} = req.params;
    var sql="Select * from ticket where Event_ID=?";
    con.query(sql, [Event_ID] ,function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})

module.exports = Router;