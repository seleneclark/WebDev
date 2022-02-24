  //Demo 1
  var canvas = document.getElementById("demo1");     
  var context = canvas.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "rgba(0, 0, 255, 0.5)";
  context.fillRect(10, 10, 100, 100);   
  context.strokeRect(10, 10, 100, 100);

  //Demo 2
  var canvas = document.getElementById("demo2");     
  var context = canvas.getContext("2d");
  context.strokeStyle = "red";
  var img = new Image();     
  img.src = "./images/mini-bike.png";
  img.onload = function() {   
      var pattern = context.createPattern(img, "repeat");     
      context.fillStyle = pattern;                            
      context.fillRect(10, 10, 100, 100);                      
      context.strokeRect(10, 10, 100, 100);
  };   
  
  // Demo 3
  function drawGradient() {
      var canvas = document.getElementById("demo3");
      var context = canvas.getContext("2d");
      context.strokeStyle = "red";
      var gradient = context.createLinearGradient(0, 0, 0, 200); 
      gradient.addColorStop(0, "blue");     
      gradient.addColorStop(1, "white");     
      context.fillStyle = gradient;     
      context.fillRect(10, 10, 100, 100);     
      context.strokeRect(10, 10, 100, 100); 
  }
  drawGradient();

  //Demo 4
  function drawCircle() {
      var canvas = document.getElementById("demo4");    
      var context = canvas.getContext("2d");    
      context.beginPath();    
      context.arc(50, 50, 30, 0, Math.PI*2, true);
      context.closePath(); 
      context.strokeStyle = "red";    
      context.fillStyle = "blue";    
      context.lineWidth = 3; 
      context.fill();     
      // context.stroke(); 
  }
  drawCircle();

  //Demo 5
  window.addEventListener("load", drawImageToCanvas, false);
  function drawImageToCanvas() {
      console.log("here");

      var canvas = document.getElementById("demo5");
      var context = canvas.getContext("2d");
      var image = document.getElementById("myImageElem");
      context.drawImage(image, 68, 68); 
      var imageData = context.getImageData(0, 0, 1, 1);
      var pixelData = imageData.data;
      console.log(pixelData.length);
  }    
  
  //Demo 6
  window.addEventListener("load", manipulateImage, false);

  function manipulateImage() {
      var canvas = document.getElementById("demo6");
      var context = canvas.getContext("2d");
      var image = document.getElementById("secondImage");
      context.drawImage(image, 68, 68);

      var imageData = context.getImageData(0, 0, 200, 200);
      
      var red, green, blue, greyscale;
      
      for (var i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i + 1];
        blue = imageData.data[i + 2];
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11; 

        imageData.data[i] = grayscale;     
        imageData.data[i + 1] = grayscale;      
        imageData.data[i + 2] = grayscale; 
      }
      context.putImageData(imageData, 0, 0);
    }

    //Demo 8
    window.addEventListener("load", determineLocation, false);

    function determineLocation() {
        if (navigator.onLine) {
            if (Modernizr.geolocation) {
                navigator.geolocation.getCurrentPosition(displayOnMap);
            
                var container = Raphael(document.getElementById("spinner"), 125, 125);
                var spinner = container.image("images/spinner.svg", 0, 0, 125, 125);
                var attrsToAnimate = { transform: "r720" };
                spinner.animate(attrsToAnimate, 60000);

            }
        }    
    }

    function displayOnMap(position) {
        document.getElementById("spinner").style.display = "none";
    }
