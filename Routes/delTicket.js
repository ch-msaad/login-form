const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.delete('/:id', (req, res) => {

  const { id } = req.params;

  con.query('Delete from ticket where id=?', [id], (error, rows) => {
    if (error) console.log(error);
    else res.send(rows);
  })
});