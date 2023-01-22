/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Patel Sarfaraz Hifzurrehman Student ID: 174554212 Date: 1/21/2023
*
********************************************************************************/ 


var serverVerbs = ["GET","GET","GET","POST","GET","POST"]; 
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
var serverResponses=["Welcome to WEB700 Assignment1","This assignment was prepared by Sarfaraz Patel","Student Name:Sarfaraz Patel","Student Email:spatel609@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"];

function httpRequest(httpVerb, path) {
    const index = serverVerbs.findIndex((verb, i) => verb === httpVerb && serverPaths[i] === path);
    if (index !== -1) {
      return `200: ${serverResponses[index]}`;
    }
    return '404: Unable to process httpVerb request for path'
  }
  console.log(httpRequest("GET","/"))
  console.log(httpRequest("POST", "/logout") )

console.log(httpRequest("GET", "/")); // should output "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // should output "200: This Assignment was prepared by Student Name"
console.log(httpRequest("POST", "/logout")); // should output "200: Logout Complete"
console.log(httpRequest("PUT", "/")); // should output "404: 404: Unable to process PUT request for/"
//automation
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
    function randomRequest() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
      const randVerb = testVerbs[getRandomInt(testVerbs.length -1)];
      const randPath = testPaths[getRandomInt(testPaths.length -1)];
      console.log(httpRequest(randVerb, randPath));
    }
  
    setInterval(randomRequest, 1);
  }

  automateTests();
