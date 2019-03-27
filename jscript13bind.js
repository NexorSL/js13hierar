this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};
console.log(module.getX());
var getX = module.getX;
console.log(getX());
// Полифилл bind
Function.prototype.MyBind = function(Arg) {
	var thisF = this;
	return function(){
		var args = Array.prototype.slice.call(arguments);
		return thisF.apply(Arg || null, args);
	};
};
//
var boundGetX = getX.MyBind(module);
console.log(boundGetX()); // 81

//Тест#2 bind'a

this.y = 8;
var obj = {
  y: 48,
  getY: function() {return this.y;}
}
var getY = obj.getY;
console.log(getY());
var boundGetY = getY.MyBind(obj);
console.log(boundGetY());
