function higherorder(makemail,...args){
    console.log(makemail);
    let bio_data=[];
    bio_data.push(args);
    console.log(bio_data);
    bio_data.push(makemail);
    console.log(bio_data);
}

  let makemail=(name,age,city)=>name+age+city+"@yahoo.com";

higherorder(makemail(167,262,567),"first_arg","second_args","third_arg");