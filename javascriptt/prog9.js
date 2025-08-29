console.log("Equals to");
console.log(null==undefined);
console.log(Number(null)==Number(undefined));
console.log(String(null)==String(undefined));
console.log(Boolean(null)==Boolean(undefined));
console.log(Number("")==0);
console.log(Boolean("")==false);
console.log(Number(undefined)==NaN);
console.log(Number(null)==0);
console.log(String(null)==null);
console.log(Number(undefined)==NaN);
console.log(String(undefined==undefined));
console.log("Empty List");

let a=[];
console.log(Number(a));
console.log(String(a));//empty string
console.log(Boolean(a));


console.log("Strict Equals to");
console.log(null===undefined);
console.log(Number(null)===Number(undefined));
console.log(String(null)===String(undefined));
console.log(Boolean(null)===Boolean(undefined));
console.log(Number("")===0);
console.log(Boolean("")===false);
console.log(Number(undefined)===NaN);
console.log(Number(null)===0);
console.log(String(null)===null);
console.log(Number(undefined)===NaN);
console.log(String(undefined)===undefined);