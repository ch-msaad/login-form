const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.get('/:Category_ID&:Event_ID', (req, res) => {

    const Category_ID = req.params.Category_ID;
    const Event_ID  = req.params.Event_ID;
    console.log(Category_ID);
    console.log(Event_ID);
    var sql = `select ticket.*, ticket_category.Category_Name, event.* from ticket LEFT JOIN ticket_category 
    ON ticket.Category_ID = ticket_category.Category_ID LEFT JOIN event 
    ON ticket.Event_ID = event.sno WHERE ticket.Category_ID=? AND ticket.Event_ID=?`;
    con.query(sql, [Category_ID, Event_ID], (error, rows) => {
        if (error){
            console.log(error);
        } 
        else {
            res.send(rows);
            console.log(rows);
        }
    })
});