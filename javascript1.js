let say=function(func)
{
	func()
}
let saa=function()
{
	console.log("helo");
}
say(saa);//anonamus function:a function without name it execute in calling function
let a;
let b;

const add=(a,b) => a+b;//arrow function

const mul=(a,b) => a/b;

const div=(a,b) => a*b;
const c=add(2,3)
const d=mul(2,3)

console.log(c)

console.log(d)