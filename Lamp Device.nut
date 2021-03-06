
#require "ws2812.class.nut:2.0.2"

// Create and configure an LED array with 5 pixels:
pixels <- WS2812(hardware.spi257, 60, false).configure();
numberOfPixels <- 59;
// Set and draw a pixel
 pixels.set(0, [0,0,0]).draw();
        pixels.set(1, [0,0,0]).draw();
        pixels.set(2, [0,0,0]).draw();
         pixels.set(3, [0,0,0]).draw();

agent.on("led", function (value) {


    if(value == "-1"){ // To turn leds off
        pixels.fill([0,0,0],0,numberOfPixels).draw();
  }
  else if(value == "0"){ // Turn led to white
    pixels.fill([255,255,255],0,numberOfPixels).draw();

  }
  else if(value == "1") {
      pixels.fill([255,0,0],0,numberOfPixels).draw();

      }
   else if(value =="2"){
        pixels.fill([255,140,0],0,numberOfPixels).draw();
    }
   else if(value == "3"){
        pixels.fill([255,255,0],0,numberOfPixels).draw();
    }
    else if(value == "4"){
        pixels.fill([0,255,0],0,numberOfPixels).draw();
    }
    else if(value == "5"){
        pixels.fill([0,0,255],0,numberOfPixels).draw();
    }
    else if(value == "6"){
        pixels.fill([255,0,255],0,numberOfPixels).draw();
    }
});

agent.on("ind", function(value) {
  pixels.draw(value["index"], [value["red"], value["green"], value["blue"]]);
});
