
var Mobile = function (mob_number) {
  // Instance Member
  this.mob_number = mob_number;
  this.price = 10000;
};
var sumsung = new Mobile('RealMe');
console.log(sumsung)

sumsung.color = 'white';
console.log(sumsung)

// color wont available for this object
var nokia = new Mobile('Nokiya');
console.log(nokia)

//prototype
// classname.prototype.key = 'value';
Mobile.prototype.colors = 'pink'; //prototype mwmber
console.log("prototype",sumsung.colors)
console.log("prototype",nokia.colors)


// higher order functions 

var add = function(firstValue) {
return function (secondValue) {
  return secondValue * firstValue
};
  
}
console.log(add(3)(7))