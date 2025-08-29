let makeneat=x=>x.trim().toUpperCase();
console.log(makeneat("       leo das      "));

function displayData(name,age,city,...args)
{
 args.push("Rolex","Anbu","Kothandam");
 console.log(args);
 args.pop();   
 console.log(name);
 console.log(age);
 console.log(city);
 console.log(arguments);
 console.log(args.sort());
 console.log(args.reverse());
 console.log(args.splice());
 console.log(args);
 console.log(args.length);
 console.log(args.shift());
 console.log(args.toLocaleString());
 console.log(args.at());
 console.log(args.displayData);
 console.log(args.reduceRight);
 console.log(args);
 console.log(args.map);
}
displayData("Ravi",43,"Ramnad","Tamilnadu","India","Asia");