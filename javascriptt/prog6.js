//prog6.js

let a11=0.1;
let b11=0.2;
let sum11=a11+b11;
console.log(sum11);
console.log(sum11===(0.1+0.2));
 
 
let x11=123456789012345678901n;
console.log(x11);
let y11=BigInt(123456789012345678901);
console.log(y11);
 
let balance1=1000n;// 10.00
let deposit1=25n;
balance1+=deposit1;
console.log(Number(balance1)/100);


/*
Welcome to Node.js v22.18.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
var x=100;
console.log(x);

100
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function display()
{
     var x=10;
    if(true)
    {
       console.log(x);
    }

}
display();
10
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function display()
{
    var x=10;
    function display1()
        {
            var y=20;
            console.log(x);
            console.log(y);
        }
        console.log(y);
    display1();
}
display();

Uncaught ReferenceError: y is not defined
    at display (REPL3:10:21)
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function display()
{
var x=10;
function display1()
{
var y=20;
console.log(x);
console.log(y);
}
console.log(x);
display1();
}
display();
10
10
20
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
// Hositing
console.log("Prior to assigning",a);

var a=100;

console.log("after assigning",a);

Prior to assigning undefined
after assigning 100
undefined
> .ediotr
Invalid REPL keyword
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function deleteme()
 {
    var x=1000;
    console.log(delete x);
    console.log(x);
 }

 deleteme();

false
1000
undefined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log("Prior to assigning",a);

var a=100;

console.log("after assigning",a);

Prior to assigning 100
after assigning 100
undefined
> .clear
> .clear
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log("Prior assigning",c); var c=10; console.log("Post assigning",c);
Prior assigning undefined
Post assigning 10
undefined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let x=1000;
let x=100;
console.log(x);

let x=100;
    ^

Uncaught SyntaxError: Identifier 'x' has already been declared
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let o=64; let o=39; console.log(o);

let o=64; let o=39; console.log(o);
              ^

Uncaught SyntaxError: Identifier 'o' has already been declared
> let o=64;console.log(o);
64
undefined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .save
The "file" argument must be specified
> .save
The "file" argument must be specified
> .load
The "file" argument must be specified
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
function iteratewithvar()
{
   for(let i=0;i<10;i++)
   {
       console.log(i);
   }
   console.log("outside",i);
}
iteratewithvar();
0
1
2
3
4
5
6
7
8
9
Uncaught ReferenceError: i is not defined
    at iteratewithvar (REPL24:7:26)
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(l); var l=100;
undefined
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(q); let q=1;
Uncaught ReferenceError: Cannot access 'q' before initialization
> .save C:\Users\vasanth.g\Desktop\javascriptt
Failed to save: C:\Users\vasanth.g\Desktop\javascriptt
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
if (true) {
 let x = 10;
 console.log(x); // 10 ✅
}
console.log(x);   // ❌ ReferenceError (x is not defined)

10
100
undefined
> .load "C:\Users\vasanth.g\Downloads\prog1.js"
Failed to load: "C:\Users\vasanth.g\Downloads\prog1.js"
> .load C:\Users\vasanth.g\Downloads\prog1.js
// Function using let inside for loop
function iteratewithvar() {
   for (let i = 0; i < 10; i++) {
       console.log(i);
   }
   console.log("outside", i); // ReferenceError: i is not defined
}
iteratewithvar();
// Output: 0 to 9, then ReferenceError

0
1
2
3
4
5
6
7
8
9
Uncaught ReferenceError: i is not defined
    at iteratewithvar (REPL168:6:27)
> .save C:\Users\vasanth.g\Desktop\javascriptt
Failed to save: C:\Users\vasanth.g\Desktop\javascriptt
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog2.js.txt
//prog2.js

function addition(x,x)
{
        return x+x;
}

console.log(addition(10,20));
40
undefined
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog2.js.txt
//prog2.js
'use strict';
function addition(x,x)
{
        return x+x;
}

console.log(addition(10,20));


function addition(x,x)
                    ^

Uncaught SyntaxError: Duplicate parameter name not allowed in this context
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog3.js.txt
'use strict';

function deleteme()
{``
    var x=1000;
    console.log(delete x);
    console.log(x);
}
deleteme();

    console.log(delete x);
                       ^

Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog3.js.txt

function deleteme()
{``
    var x=1000;
    console.log(delete x);
    console.log(x);
}
deleteme();

false
1000
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
var name="Rolex"
console.log(name);
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
var name="Rolex"; delete name; console.log(name);
Rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
name="Rolex"; delete name; console.log(name);
Rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
number = 987; delete number; console.log(number);

Uncaught ReferenceError: number is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let val1=null; console.log(typeof(val1));
object
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let val2=undefined; console.log(typeof(val2));
undefined
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)

(To exit, press Ctrl+C again or Ctrl+D or type .exit)
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog4.js.txt
let x=890;
let name1="rolex";
let name2='dilli';
let val1=true;
console.log(val1);
console.log(`Climax  ${name1+" won against "+name2} `);
let val4=undefined;
console.log(val4);

Uncaught SyntaxError: Identifier 'x' has already been declared
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog4.js.txt
let name1="rolex";
let name2='dilli';
let val1=true;
console.log(val1);
console.log(`Climax  ${name1+" won against "+name2} `);
let val4=undefined;
console.log(val4);
Uncaught SyntaxError: Identifier 'val1' has already been declared
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog4.js.txt
let name1="rolex";
let name2='dilli';
let val12=true;
console.log(val1);
console.log(`Climax  ${name1+" won against "+name2} `);
let val45=undefined;
console.log(val45);
null
Climax  rolex won against dilli
undefined
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(MAX_SAFE_INTEGER);
Uncaught ReferenceError: MAX_SAFE_INTEGER is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
value1=MAX_SAFE_INTEGER; console.log(value1);
Uncaught ReferenceError: MAX_SAFE_INTEGER is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)

let num12=2**53;
console.log(num12);
9007199254740992
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let num13=9007199254740992+9007199254740991; console.log
(num13);
18014398509481984
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let num12=2**55;
console.log(num12);

Uncaught SyntaxError: Identifier 'num12' has already been declared
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(typeof(num12);
console.log(typeof(num12);
                        ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(typeof(num12));
number
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(typeof(num13));
number
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(Number.MIN_SAFE_INTEGER); console.log(Number.MAX_SAFE_INTEGER);
-9007199254740991
9007199254740991
undefined
> .load C:\Users\vasanth.g\Desktop\I-Exceed-August\I-Exceed_August\javascriptt\prog5.js.txt
//prog5.js

let myqualification={ug:"BE",pg1:"ME",pg2:"MCA",pg3:"MPhil","doc":true,yoe:25}
console.log(typeof(myqualification));
console.log(typeof(n));
console.log(typeof(addition));


object
undefined
function

Welcome to Node.js v22.18.0.
Type ".help" for more information.
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let name="Rolex"; console.log(name.length);
5
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.charAt(1)); console.log(name.charAtIndex(1)); console.log(name.indexOf(e));
o
Uncaught TypeError: name.charAtIndex is not a function
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.charAt(1)); console.log(name.charCodeAt(1)); console.log(name.indexOf(e));
o
111
Uncaught ReferenceError: e is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.charAt(1)); console.log(name.charCodeAt(1)); console.log(name.indexOf("e"));
o
111
3
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.startsWith("R")); console.log(name.includes("lex"));
true
true
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.endsWith("x");
console.log(name.endsWith("x");
                             ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.endsWith("x"));
true
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let name1=" LEO DAS "; console.log(name1); console.log('"${name1.trim()}"'); console.log('"${name1.trimStart()}"'); console.log('"${name1.trimEnd()}"');
 LEO DAS
"${name1.trim()}"
"${name1.trimStart()}"
"${name1.trimEnd()}"
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
> let name1=" LEO DAS "; console.log(name1); console.log('${name1.trim()}'); console.log('${name1.trimStart()}'); console.log('${name1.trimEnd()}');
Uncaught SyntaxError: Identifier 'name1' has already been declared
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
 console.log(name1); console.log('${name1.trim()}'); console.log('${name1.trimStart()}'); console.log('${name1.trimEnd()}');
 LEO DAS
${name1.trim()}
${name1.trimStart()}
${name1.trimEnd()}
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
  console.log("trim():", `"${name1.trim()}"`);
trim(): "LEO DAS"
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
  console.log("trimStart():", `"${name1.trimStart()}"`);   console.log("trimEnd():", `"${name1.trimEnd()}"`);
trimStart(): "LEO DAS "
trimEnd(): " LEO DAS"
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.toUpperCase()); console.log(name.toLowerCase());
ROLEX
rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let str1="He is a wonderful actor"; console.log(str1); console.log(str1.replace("wonderful","Extraordinary")); console.log(str1.replaceAll("a","@"));
He is a wonderful actor
He is a Extraordinary actor
He is @ wonderful @ctor
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.split(" "));
[ 'Rolex' ]
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(str1.trim().split(" "));
[ 'He', 'is', 'a', 'wonderful', 'actor' ]
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst1=antony,harold,leo; console.log(lst1.split(","); console.log(lst1.split(",").join("-"));
let lst1=antony,harold,leo; console.log(lst1.split(","); console.log(lst1.split(",").join("-"));
                                                      ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(lst1.split(",")); console.log(lst1.split(",").join("-"));
Uncaught ReferenceError: lst1 is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst1=antony,harold,leo; console.log(lst1.split(",")); console.log(lst1.split(",").join("-"));
Uncaught ReferenceError: antony is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst1="antony,harold,leo"; console.log(lst1.split(","); console.log(lst1.split(",").join("-"));
let lst1="antony,harold,leo"; console.log(lst1.split(","); console.log(lst1.split(",").join("-"));
                                                        ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst1="antony,harold,leo"; console.log(lst1.split(",")); console.log(lst1.split(",").join("-"));
Uncaught SyntaxError: Identifier 'lst1' has already been declared
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(lst1.split(",")); console.log(lst1.split(",").join("-"));
Uncaught ReferenceError: lst1 is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(lst1);
Uncaught ReferenceError: lst1 is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst1="antony,harold,leo"; console.log(lst1.split(",")); console.log(lst1.split(",").join("-"));
Uncaught SyntaxError: Identifier 'lst1' has already been declared
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let lst2="antony,harold,leo"; console.log(lst2.split(",")); console.log(lst2.split(",").join("-"));
[ 'antony', 'harold', 'leo' ]
antony-harold-leo
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.slice(1,3)); console.log(name.substring(1,3));
ol
ol
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.concat(" SIR"); console.log(name.repeat(4));
console.log(name.concat(" SIR"); console.log(name.repeat(4));
                              ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.concat(" SIR")); console.log(name.repeat(4));
Rolex SIR
RolexRolexRolexRolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.padStart(2,"*")); console.log(name.padEnd(2,"*"));
Rolex
Rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name.padStart(10,"*")); console.log(name.padEnd(10,"*"));
*****Rolex
Rolex*****
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(localeCompare("Role"));
Uncaught ReferenceError: localeCompare is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(str1.search("He"));
0
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(str1.search("is"));
3
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(str1.toString()); console.log(str1.ValueOf());
He is a wonderful actor
Uncaught TypeError: str1.ValueOf is not a function
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(str1.valueOf());
He is a wonderful actor
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log("The ultimatum is ",${name});

console.log("The ultimatum is ",${name});
                                ^

Uncaught SyntaxError: missing ) after argument list
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log("The ultimatum is ,${name}");
The ultimatum is ,${name}
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(name);
Rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log('The ultimatum is ,${name}');
The ultimatum is ,${name}
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const name3="Dilli"; console.log('The ultimatum is ,${name3}');
The ultimatum is ,${name3}
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(`Template literal: Hello, ${name3}!`);

Template literal: Hello, Dilli!
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)

(To exit, press Ctrl+C again or Ctrl+D or type .exit)
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(`The ultimatum is ,${name}');



Uncaught SyntaxError: Unexpected end of input
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(`The ultimatum is ,${name}`);
The ultimatum is ,Rolex
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(boolean(" "));
Uncaught ReferenceError: boolean is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(bool(" "));
Uncaught ReferenceError: bool is not defined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(Boolean(" "));
true
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(String(null));
null
undefined
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let aa=0; let bb="0"; console.log(aa==bb);
true
undefined
> let st1="Globe"; let st2="Glock"; console.log(st1>st2);
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let st1="Globe"; let st2="Glock"; console.log(st1>st2);
false
undefined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

*/