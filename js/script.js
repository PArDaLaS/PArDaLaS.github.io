// Create the application helper and add its render target to the page

function doSomething() {
    let app = new PIXI.Application({width: 800, height: 600});
    document.body.appendChild(app.view);

// Create the sprite and add it to the stage
    let sprite = PIXI.Sprite.from('sample.jpg');
    app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((delta) => {
        elapsed += delta;
        sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
}

function flowers() {
    document.getElementById("bb").style.display="none";
    const app = new PIXI.Application({backgroundAlpha: 0});
    document.body.appendChild(app.view);
    const container = new PIXI.Container();

    app.stage.addChild(container);

// create a new Sprite from an image path.
    for (let i = 0; i < 70; i++) {

    let bunny = PIXI.Sprite.from('../flower.png');

    bunny.height = "70";
    bunny.length = "70";
    bunny.width = "70";
// center the sprite's anchor point
    bunny.anchor.set(0.5);

// move the sprite to the center of the screen
    bunny.x = (i % 10) * 70;
    bunny.y = Math.floor(i / 10) * 65;

    container.addChild(bunny);

    app.ticker.add(() => {
        // just for fun, let's rotate mr rabbit a little
        if(i%2===0) {
            bunny.rotation += 0.03;
        }else {
            bunny.rotation-=0.03;
        }
    });
}
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

}


function createFallingFlowers() {
  // Create a PixiJS application
    
    // Generate random values for red, green, and blue within different ranges
    var r = Math.floor(Math.random() * 128) + 128;  // Shades of purple: 128-255
    var g = Math.floor(Math.random() * 128);        // Shades of purple: 0-127
    var b = Math.floor(Math.random() * 128) + 128;  // Shades of pink: 128-255

    // Combine the red, green, and blue color channels into a single 24-bit number
    var rgb = (r << 16) | (g << 8) | b ;

    // Convert the 24-bit number to a hex color string and prepend a "0x" to indicate that it is a hex color value
    var hex = "0x" + rgb.toString(16);
    
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: hex,
  });
  document.body.appendChild(app.view);

  // Load an image of a flower
  PIXI.Loader.shared.add("flower", '../flower.png').load(setup);

  function setup() {
    // Create an array to store the falling flowers
    const flowers = [];

    // Create a container to hold the flowers
    const flowersContainer = new PIXI.Container();
    app.stage.addChild(flowersContainer);

    // Create a loop to add new flowers to the stage
    app.ticker.add((delta) => {
      // Create a new flower sprite
      const flower = new PIXI.Sprite(PIXI.Loader.shared.resources.flower.texture);

      // Set the flower's position and scale
      flower.x = Math.random() * app.screen.width;
      flower.y = -Math.random() * app.renderer.screen.height;
      flower.scale.x = flower.scale.y = 0.1 + Math.random() * 0.3;
      flower.height=50;
      flower.width=50;
      // Add the flower to the stage and the flowers array
        flower.tint = Math.random() * 0xFFFFFF;
      flowersContainer.addChild(flower);
      flowers.push(flower);
    });

    // Create a loop to update the position of each flower
    app.ticker.add((delta) => {
      for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];
        flower.y += 5;
        flower.rotation += 0.02;

        // Remove the flower if it goes off the bottom of the screen
        if (flower.y > app.screen.height) {
          flowersContainer.removeChild(flower);
          flowers.splice(i, 1);
          i--;
        }
      }
    });
  }
}

function createSparkles() {
    alert("starts");
  // Create a container to hold the sparkles
  const sparkles = new PIXI.Container();

  // Create a sprite for each sparkle
  for (let i = 0; i < 50; i++) {
    const sparkle = PIXI.Sprite.from("../flower.png");
    
    sparkle.anchor.set(0.5);
    
    sparkle.scale.set(0.5 + Math.random() * 0.5);
    sparkle.tint = Math.random() * 0xFFFFFF;
    sparkle.alpha = 0;
    sparkles.addChild(sparkle);
     
    
  }
    alert("somewhere in the middle");
  // Add the sparkles container to the stage
  app.stage.addChild(sparkles);

  // Listen for the mouse move event
  app.renderer.plugins.interaction.on("mousemove", (event) => {
    // Get the mouse position
    const mousePosition = event.data.global;
    alert("this?");
    // Loop through each sparkle and update its position
    sparkles.children.forEach((sparkle) => {
      sparkle.x = mousePosition.x + Math.random() * 10 - 5;
      sparkle.y = mousePosition.y + Math.random() * 10 - 5;
      sparkle.alpha = 1;
   
    });
  });
    alert("this should work");
  // Use the ticker to animate the sparkles
  app.ticker.add((delta) => {
      alert("and that?");
    sparkles.children.forEach((sparkle) => {
      sparkle.alpha -= delta * 0.01;
    });
  });
}

function test509() {
// Create a PixiJS Application
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: true,
    });

// Add the canvas to the DOM
    console.log("Adding canvas to the DOM");

    document.body.appendChild(app.view);

// Create an empty container to hold the sparkles
    console.log("Creating a container for sparkles");

    const sparklesContainer = new PIXI.Container();
    app.stage.addChild(sparklesContainer);

// Set up the sparkle texture
    console.log("Loading the sparkle texture");

    const sparkleTexture = PIXI.Texture.from("../flower.png");
    sparkleTexture.width=30;
    sparkleTexture.height=30;
// Set up an array to hold all the sparkles
    console.log("Creating an array for sparkles");

    const sparkles = [20];
    let mx=[20];
    let my=[20];
// Add an event listener to update the position of the sparkles
    console.log("Adding a mousemove event listener");
        document.addEventListener('mousemove', (event) => {
        for (let i = 0; i < sparkles.length; i++) {
            const sparkle = sparkles[i];
            const distance = Math.sqrt((sparkle.x - event.clientX) ** 2 + (sparkle.y - event.clientY) ** 2);
            
            if(Math.random()>0.5){
                mx[i]=event.clientX+10*Math.random();
            }else{
                mx[i]=event.clientX-10*Math.random();
            }
            my[i]=event.clientY+(5*i*Math.random());
            
            if (distance < 100) {
                sparkle.alpha = Math.random()*(1 - 0.1) - 0.1;
            } else {
                sparkle.alpha = 0;
            }
            
        }
    });

// Create a function to add new sparkles
    console.log("Creating a function to add sparkles");

    function addSparkles() {
        const sparkle = new PIXI.Sprite(sparkleTexture);
       
       
        sparkle.anchor.set(0.5);
        sparkle.alpha = 0;
        let k=35*Math.random();
        sparkle.height=k;
        sparkle.width=k;
        sparklesContainer.addChild(sparkle);
        sparkles.push(sparkle);
    }
// Call the addSparkles function every 500 milliseconds
    console.log("Calling addSparkles every 500ms");

    setInterval(addSparkles, 200);
    let cx=0,cy=0;

// Set up the update function to animate the sparkles
    console.log("Setting up an update function");

    function update() {
        for (let i = 0; i < sparkles.length; i++) {
            const sparkle = sparkles[i];
            sparkle.x=mx[i];
            cy+=1;
            if(cy>30){
               sparkle.alpha = Math.random()*(1 - 0.1) - 0.1;
               cy=1;
            } 
            sparkle.y=my[i]+cy;
            
            sparkle.rotation += 0.1;
            sparkle.alpha-=0.005;
            if (sparkle.y > window.innerHeight) {
                sparklesContainer.removeChild(sparkle);
                sparkles.splice(i, 1);
            }
        }
    }

// Start the PixiJS Application
    console.log("Starting the PixiJS application");

    app.ticker.add(update);
}


