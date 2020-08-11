//platform-independent

var myDate = new Date()
console.log(myDate)

console.log(myDate.toDateString())

month = myDate.getMonth()  // start from 0
console.log(month)

date = myDate.getDate()  // start from 1
console.log(date)

day = myDate.getDay()
console.log(day)  // start from 0 means sunday

year = myDate.getFullYear()
console.log(year)

console.log(myDate.getHours())
console.log(myDate.getMilliseconds())
console.log(myDate.getSeconds())

var pastDate = new Date('january 5 1996')
console.log(pastDate.getDay())

var newDate = new Date()
newDate.setFullYear(2020);
console.log(newDate)

