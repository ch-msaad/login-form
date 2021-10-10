require('dotenv').config()
const express = require("express");
const Router = express.Router();
const jwt = require('jsonwebtoken');
const con = require('../db_connection');
var accessToken;
Router.post('/', (req,res)=>{

    console.log(req.body)
    var sql='Select Email, Password from admins WHERE Email= ? AND Password= ?';
    //console.log("test")
    const email = req.body.email
    const user = { email: email }
    con.query(sql, [req.body.email, req.body.password], function (err, rows){
        console.log(rows.length);
        if (err){
            console.log(err);
            res.send(err);
        } 
        else if(rows.length > 0 ){
            accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json({ accessToken: accessToken, status: 200 })
             console.log(accessToken)

        }
        else if(rows.length == 0 ){
            res.json({msg: "Invalid Username or Password!"});
        }
        //console.log(rows)
    })

})


module.exports = Router;