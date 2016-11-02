#require "ws2812.class.nut:2.0.2"

// To set pixels to light config
pixels <- WS2812(hardware.spi257, 60, false).configure();
rLed <- 255;
gLed <- 0;
bLed <- 0;

// Set and draw a pixel
        pixels.set(0, [0,0,0]).draw();
        pixels.set(1, [0,0,0]).draw();
        pixels.set(2, [0,0,0]).draw();
         pixels.set(3, [0,0,0]).draw();
         
        for(gLed=0; gLed<255; gLed++){     // To turn green full (oraenge)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1);
        }
        
        for(; rLed>0; rLed--){    // To turn off red (Full green)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1);
        }
        
        for(; bLed<255; bLed++){    // To turn on blue (turquoise)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1);
        }
        
        for(; gLed>0; gLed--){    // To turn off green (Full Blue)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1);   
        }
        
        for(; rLed<255; rLed++){  // to turn red on (purple)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1); 
        }
        
        for(; bLed>=0; bLed--){  // to turn off blue (Full red)
            pixels.fill([rLed,gLed,bLed],0,4).draw();
            server.log("R:" + rLed + " G:" + gLed  + " B:" + bLed);
            imp.sleep(0.1);  
        }
