

// const squared = function(x) {
// return x*x    
// }

// arrow function
const squaredSingle = x => x*x*x  //single parameter
console.log(squaredSingle(5))

const squaredDoble = (x,y) => x*y //double parameter
console.log(squaredDoble(3,5))

const cource = ['java','python','js'];
const courceSite =  "XYZ";
const courceArr = cource.map(cource =>({ cource: `${cource}`, site: `${courceSite}`}));
console.table(courceArr)
