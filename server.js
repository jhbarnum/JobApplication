// Dependencies
var express = require("express");
var mongojs = require("mongojs");//save info
var app = express();// Initialize Express
var request = require("request"); // Import JSON

var databaseUrl = "Applications";
var collections = ["applicants"];

var db = mongojs(databaseUrl, collections); // Use mongojs to hook the database to the db variable

db.on("error", function(error) {
  console.log("Database Error:", error);  // This makes sure that any errors are logged if mongodb runs into an issue
});
getData();
app.listen(3000, function () {
  console.log("App running on port 3000!");  // Set the app to listen on port 3000
});


function getData() {
  var fs = require("fs");
  fs.readFile("snagApps.json", "utf8", function (error, data) {
    var dataObj = data.split("] }");
    for (var t = 0; t < 4; t++) {
      console.log(dataObj[t] + '-------------------------');

    }
    // var dataArr = data.split(",");
    // for(var i=0; i<12; i++){
    // console.log(dataArr[i]);
    // }
    if (error) {
      return console.log(error);
    }
  })
}


//displayAllApplications();
  // foreach{}

//sortApplicationsByName();

//sortApplicationsByJob();

//findApplicationByName();

//findApplicationByJob();

//saveApplication();

//mySavedApps();
   