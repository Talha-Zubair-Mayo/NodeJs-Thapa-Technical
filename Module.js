// Creating Module 

const add = (a,b)=>
{
  return a+b;
}
const sub = (a,b)=>
{
  return a-b;
}
const mul = (a,b)=>
{
  return a*b;
}
const div = (a,b)=>
{
  return a/b;
}

// exporting it
// module.exports = add;

/* Exporting multiple modules */
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;

/* Here we'll export all modules by using onject destructuring */

module.exports = {add , div , mul , sub};
