class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.animation=boatAnimation;
    this.boatPosition = boatPos;
    this.speed=0.05;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
animate(){
  this.speed=this.speed+0.05;

}
//to remove ships from the world
  remove(index) 
  {
    this.animation=brokenboatAnimation;
    this.speed=0.05;
    this.width=300;
    this.heigth=300;
    setTimeout(()=>{
                World.remove(world, boats[index].body);
                boats.splice(index, 1);
              },150);
    console.log(removed);
  }


  display() 
  {
    //console.log(this.animation);
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
