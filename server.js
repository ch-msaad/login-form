const EventRoutes = require("./Routes/events");
const TicketRoutes = require("./Routes/tickets");
const TickeCattRoutes = require("./Routes/ticketcat");
const getCatRoutes = require("./Routes/getCat");
const joinsRoutes = require("./Routes/joins");
const DelEventRoutes = require("./Routes/delEvent");
const DelUserRoutes = require("./Routes/delUser");
const DelTickeRoutes = require("./Routes/delTicket");
const DelTickeCatRoutes = require("./Routes/delTicketCat");
const EditEventRoutes = require("./Routes/editEvent");
const EditTicketRoutes = require("./Routes/editTicket");
const EditTicketCatRoutes = require("./Routes/editTicketCat");
const EditUserRoutes = require("./Routes/editUser");
const TicketBoardRoutes = require("./Routes/tickets-board");
const UserboardRoutes = require("./Routes/user-board");
const UserRoutes = require("./Routes/users");
const LoginRoutes = require("./Routes/login");
const AdminRoutes = require("./Routes/admin");
const addEventRoutes = require("./Routes/addEvent");
const addTicketRoutes = require("./Routes/addTicket");
const addTicketCatRoutes = require("./Routes/addTicketCat");

var cors = require('cors')


const express = require("express");
const con = require("./db_connection");
var app = express();

app.use(express.json());

app.use(express.urlencoded());
// bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors())
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();
  });
app.use("/events", EventRoutes);
app.use("/ticket", TicketRoutes);
app.use("/ticketcat", TickeCattRoutes);
app.use("/getCat", getCatRoutes);
app.use("/joins", joinsRoutes);
app.use("/delEvent", DelEventRoutes);
app.use("/delUser", DelUserRoutes);
app.use("/delTicket", DelTickeRoutes);
app.use("/delTicketCat", DelTickeCatRoutes);
app.use("/editEvent", EditEventRoutes);
app.use("/editTicket", EditTicketRoutes);
app.use("/editTicketCat", EditTicketCatRoutes);
app.use("/editUser", EditUserRoutes);
app.use("/user-board", UserboardRoutes);
app.use("/ticket-board", TicketBoardRoutes);
app.use("/register-page", UserRoutes);
app.use("/login", LoginRoutes);
app.use("/admin", AdminRoutes);
app.use("/addEvent", addEventRoutes);
app.use("/addTicket", addTicketRoutes);
app.use("/addTicketCat", addTicketCatRoutes);

app.listen(8080);
