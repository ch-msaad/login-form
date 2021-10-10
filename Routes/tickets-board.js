const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

Router.get("/", (req,res)=>{
    var sql=`Select ticket.*, ticket_category.Category_Name,
     event.title from ticket LEFT JOIN ticket_category 
     ON ticket.Category_ID = ticket_category.Category_ID LEFT JOIN event 
     on ticket.Event_ID = event.sno`;
    con.query(sql, function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})

module.exports = Router;