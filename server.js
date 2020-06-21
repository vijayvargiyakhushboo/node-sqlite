// Create express app
var express= require("express")
var app= express()

//Serve port 
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
	console.log("server running")
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