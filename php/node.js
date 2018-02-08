var express = require('express');
var app = express();
var body = require('body-parser')
var mysql = require('mysql');


var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //extension of views
app.use(bodyParser.urlencoded({ extended: false }));

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test'
});
conn.connect();
app.get('/test', function(request, response){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    conn.query('SELECT DISTINCT `sports` FROM `gs_sports`', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

app.get('/newtest', function(request, response)
{
    response.send("response")
});

app.get('/insert', function(req, res, next)
{
     // res.send("Harshvardhan")
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   var query = conn.query("INSERT INTO gs_jobinfo(id,userid,title,location,gender,sport,type,job_link,work_experience,description,key_requirement,org_address1,org_address2,org_city,org_state,org_pin,organisation_name,qualification,address1,address2,state,pin,contact,email,image,about,desired_skills) values('"+req.body.id+"','"+req.body.userid+"','"+req.body.title+"','"+req.body.location+"','"+req.body.gender+"','"+req.body.sport+"','"+req.body.type+"','"+req.body.job_link+"','"+req.body.work_experience+"','"+req.body.description+"','"+req.body.key_requirement+"','"+req.body.org_address1+"','"+req.body.org_address2+"','"+req.body.org_state+"','"+req.body.org_pin+"','"+req.body.organisation_name+"','"+req.body.qualification+"','"+req.body.address1+"','"+req.body.address2+"','"+req.body.state+"','"+req.body.pin+"','"+req.body.contact+"','"+req.body.email+"','"+req.body.image+"','"+req.body.about+"','"+req.body.desired_skills+"')", function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
});
});



app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});