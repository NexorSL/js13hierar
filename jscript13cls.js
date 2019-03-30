var MATH_PI = 3.14;
// Класс точки
class Point {
  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
  getPosition(){
    return 'My position x:'+this.x+', y:'+this.y;
  }
  getColor(){
    return 'My color - '+ this.color;
  }
  getName(){
    return 'They call me ' + this.constructor.name;
  }
}
var point = new Point(1,4,'blue');
console.log(point.getName(),point.getPosition());
// Класс квадрата
class Square extends Point {
  constructor(x,y,color,side){
    super(x,y,color);
    this.side = side;
  }
  getArea(){
    return Math.pow(this.side,2);
  }
  getPerimeter(){
    return 'My Perimeter is ' + this.side*4;
  }
}
var square = new Square(1,4,'blue',5);
console.log(square.getName(),'My area is '+ square.getArea(),square.getPerimeter(),square.getColor(),square.getPosition());
// Класс круга
class Circle extends Point{
  constructor(x,y,color,radius){
    super(x,y,color);
    this.radius = radius;
  }
  getRadius(){
    return 'My radius is ' + this.radius;
  }
  getArea(){
    return (MATH_PI * Math.pow(this.radius,2));
  }
}
var circle = new Circle(1,4,'red',10);
console.log(circle.getName(),circle.getColor(),circle.getRadius(),'My area is '+circle.getArea());
// Класс куба
class Cube extends Square{
  constructor(x,y,z,color,side){
    super(x,y,color,side);
    this.z = z;
  }
  getAreaCube(){
    return 'My area is ' + (Math.pow(this.side,2)*6);
  }
  getVolume(){
    return 'My volume is ' + (Math.pow(super.getArea(),2));
  }
  getPosition(){
    return 'My position x:'+this.x+' y:'+this.y+' z:'+this.z;
  }
}
var cube = new Cube(1,4,6,'black',3);
console.log(cube.getName(),cube.getAreaCube(),cube.getVolume());
// Класс сферы
class Sphere extends Circle{
  constructor(x,y,z,color,radius){
    super(x,y,color,radius);
    this.z = z;
  }
  getAreaSphere(){
    return super.getArea()*2;
  }
  getVolume(){
    return 'My volume is ' + (this.getAreaSphere()*this.radius)/3;
  }
}
var sphere = new Sphere(1,4,2,'yellow',2);
console.log(sphere.getName(),'My area is '+sphere.getAreaSphere(),sphere.getVolume());
