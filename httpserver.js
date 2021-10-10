var http = require('http');
const con = require("./db_connection");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  var url= req.url;
  console.log(url);
  if (url == "/events"){
    var sql="Select * from event";
    con.query(sql, function (err, rows){
        if (err) throw err;
        console.log(rows);
      })
  }
  res.end();
}).listen(8080);