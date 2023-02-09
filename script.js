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
