const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.delete('/:Category_ID', (req, res) => {

  const { Category_ID } = req.params;

  con.query('Delete from ticket_category where Category_ID=?', [Category_ID], (error, rows) => {
    if (error) console.log(error);
    else res.send(rows);
  })
});