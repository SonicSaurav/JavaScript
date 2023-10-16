// Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let mydate = new Date(2023,0,23) //Year,Month,Date,Hour,Minutes
console.log(mydate.toString());
let mytimestamp =Date.now()
console.log(Math.floor(Date.now()/1000));
let newdate =  new Date()
console.log(newdate.getMonth());