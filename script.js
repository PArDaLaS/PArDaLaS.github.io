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

    let bunny = PIXI.Sprite.from('flower.png');

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
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
  });
  document.body.appendChild(app.view);

  // Load an image of a flower
  PIXI.Loader.shared.add("flower", "sample.jpg").load(setup);

  function setup() {
    // Create an array to store the falling flowers
    const flowers = [];

    // Create a container to hold the flowers
    const flowersContainer = new PIXI.Container();
    app.stage.addChild(flowersContainer);
      
      flowersContainer.x = app.screen.width / 2;
      flowersContainer.y = app.screen.height / 2;

    // Create a loop to add new flowers to the stage
    app.ticker.add((delta) => {
      // Create a new flower sprite
      const flower = new PIXI.Sprite(PIXI.Loader.shared.resources.flower.texture);

      // Set the flower's position and scale
      flower.x = Math.random() * app.screen.width;
      flower.y = -100;
      flower.scale.x = flower.scale.y = 0.1 + Math.random() * 0.3;
      flower.height=70;
      flower.width=70;
      // Add the flower to the stage and the flowers array
      flowersContainer.addChild(flower);
      flowers.push(flower);
    });

    // Create a loop to update the position of each flower
    app.ticker.add((delta) => {
      for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];
        flower.y += 10;
        flower.rotation += 0.1;

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
