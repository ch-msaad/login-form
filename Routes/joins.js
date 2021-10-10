const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

Router.get("/:Event_ID", (req,res)=>{
    const {Event_ID} = req.params;
    var sql=`Select ticket.*, ticket_category.Category_Name, event.* from ticket LEFT JOIN ticket_category 
    ON ticket.Category_ID = ticket_category.Category_ID LEFT JOIN event 
    ON ticket.Event_ID = event.sno where Event_ID=?`;
    con.query(sql, [Event_ID] ,function (error, rows){
        if (error) console.log(error);
        console.log(rows)
        res.json({data: rows})
      })
})

module.exports = Router;