require('dotenv').config()
const express = require("express");
const Router = express.Router();
const jwt = require('jsonwebtoken');
const con = require('../db_connection');
const bcrypt = require("bcrypt");

var accessToken;
Router.post('/', async(req,res)=>{
try{
    // const hash = await bcrypt.hash(req.body.password, 10)
    // await db('user').insert({req.body.email, hash: hash})
   // console.log(req.body)
    var sql='Select Email, Password from user WHERE Email= ?';
    //console.log("test")
    const email = req.body.email
    const user = { email: email }
    
    con.query(sql, [req.body.email], async(error, rows)=>{
        console.log(rows.length);
        
        //console.log(valid);
            if (error) {
                console.log(error);
                res.send(error);
            }
            else if(rows.length == 0 ){
                res.json({msg1: "Invalid Username or Password!"});
            } 
            else if(rows.length > 0 ){
                const password = rows[0].Password
                console.log(password)
                const valid = await bcrypt.compare(req.body.password, password)
            if(valid){
                accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                res.json({ accessToken: accessToken, status: 200, rows })
                 console.log(accessToken)
               //  console.log(rows[0].Password);
                 //res.send(rows)
            }
            else if(accessToken == undefined){
                res.json({msg1: "Invalid Username or Password!"});
            }
        }    
        
        //console.log(rows)
    })
        
        
}
catch(error){
    console.log(error);
}

})


module.exports = Router;