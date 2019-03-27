// class First {
//   constructor(name) {
//     this.name = name;
//   }
//
//   getName(){
//     return("My name is "+ this.name);
//   }
//
//   getMessage(){
//     return this.name + " can talk";
//   }
// }
// console.log(new First("first").getMessage());
// class Second extends First {
//   super(){}
// }
// console.log(new Second("second").getName());
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
}
console.log(new Point(5,2,'red').getPosition());
var point = new Point(1,4,'blue');
console.log(point.getPosition());
