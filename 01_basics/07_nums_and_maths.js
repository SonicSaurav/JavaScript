const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance)
console.log(typeof(balance.toString()));
console.log(balance.toFixed(2));
const hundreds = 1_000_000
console.log(hundreds.toLocaleString('en-IN'));
console.log(Number.MAX_SAFE_INTEGER);

// ++++++++++++++ Maths +++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //Positive remains Posi and Negative changes to positive
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));
console.log(Math.min(4,3,2,5));
console.log(Math.max(4,3,2,5));
console.log(Math.ceil((Math.random()*10)));
