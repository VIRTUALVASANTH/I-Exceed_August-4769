'use strict'; 
let age=21;
 
if(age<18)
{
   var greeting= function ()
     {
        console.log("welcome you all and wait for your turn!");
     };     
}
else
{
    var greeting=function()
     {
        console.log("welcome you all and you are all eligible to write the exam!");
     };    
}

function hello()
{
    let g1="Hello"
    console.log(g1);
}
 
greeting();
console.log(hello);