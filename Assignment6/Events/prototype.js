var Mobile = function (mob_number) {
  this.mob_number = mob_number;
  this.price = 10000;
};
var sumsung = new Mobile('RealMe');
console.log(sumsung)

// prototype
sumsung.color = 'white';
console.log(sumsung)