const express = require("express");
const con = require("../db_connection");
const Router = express.Router();

module.exports = Router;

Router.delete('/:User_ID', (req, res) => {

  const { User_ID } = req.params;

  con.query('Delete from user where User_ID=?', [User_ID], (error, rows) => {
    if (error) console.log(error);
    else res.send(rows);
  })
});