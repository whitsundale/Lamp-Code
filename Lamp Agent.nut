// Log the URLs to turn LED on/off when agent starts
#require "Rocky.class.nut:1.3.0"
local api = null;
server.log("Turn the LED on by browsing to " + http.agenturl() + "?led=1");
server.log("Turn the LED off by browsing to " + http.agenturl() + "?led=0");

api = Rocky();
// HTTP Request handlers expect two parameters:
// request: the incoming request
// response: the response we send back to whoever made the request

function requestHandler(request, response) {
  // Check if the variable led was passed into the query

 // server.log(request);
    if (request.query["led"])
      device.send("led", request.query["led"]);
    else if (request.query["red"] && request.query["green"] && request.query["blue"] && request.query["index"]){
      device.send("ind", request.query)
    }else {
      response.send(400, "You must include the LED number or parameters red, green, blue, and index.")
    }

  // send a response back to whoever made the request
  response.send(200, "OK");
}

// your agent code should only ever have ONE http.onrequest call.
http.onrequest(requestHandler);
