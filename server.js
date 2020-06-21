// Create express app
var express= require("express")
var app= express()
var db = require("./database.js")
//var db = require("./database.js")
//Serve port 
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
	console.log("server running")
});

app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

//Root endpont
app.get('/',(req,res,next) => {
	res.json({"msg":"OK"})
});

//Insert here other API endpoints

//Default response for any other request
app.use(function(req, res){
	res.status(404);
})