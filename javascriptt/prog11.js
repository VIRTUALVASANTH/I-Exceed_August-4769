function functionname(parameters)
 {
    //body of the function
 }
 
 let username="LEO";
 
 function displayMe()
  {
    let username="ROLEX"; // local variable
    console.log("Welcome\t"+username);
  }
 
  console.log(username);
  displayMe();
 
  function addition(x,y,z)
  {
    return x+y+z;
  }
  console.log(addition(1,2,3));
 
  function displayData(name,age,city="Bangalore")
  {
    console.log(name);
    console.log(age);
    console.log(city);
  }
 
  displayData("Dilli",39,"Chennai");

  let displaythat=(x,y)=>x*y;//only one expression(one execution) after arrow.
  console.log(displaythat(10,10));

  let getMe=(x)=>x.toUpperCase();
  console.log(getMe("ghostgopalvarma"));

  let makemail=(name,age,city)=>name+age+city+"@"+yahoo.com;
  console.log(makemail("rolex","18","chennai"));