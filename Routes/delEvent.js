  const express = require("express");
  const con = require("../db_connection");
  const Router = express.Router();

  module.exports = Router;

  Router.delete('/:sno', (req, res) => {

try {  
    const { sno } = req.params;

    con.query('Delete from event where sno=?', [sno], (error, rows) => {
      if (error){
        console.log(error);
        res.send(error);
       // alert("Error!!!");
      } 
      else{
        res.send(rows);
      } 
    })
  
}
catch (error) {
  console.log("Server Error!!!");
}
});
