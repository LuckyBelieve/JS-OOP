
const believe =  {
    Name:'ineza lucky Believe',
    Age:17,
    School:'Rwanda Coding Academy',
    display: function(){
        return "My names are "+this.Name +" ,I'm "+ this.Age +" years old and i went to study in "+ this.School;
    }
}
console.log(believe.display());
// console.log(believe.display());

const sister = {
    Name: 'Abeza Mary Reply Happiness',
    Age:13,
    School: 'FAWE Girls School',
}
// console.log(believe.display.bind(sister));


// the use of call when we have the arguments in the function

const lucky = {
     display: function(country,city){
     return "my names are "+this.firstname+" "+this.lastName+", and my home country is "+country+" in "+city+" city";
    }
}

const details = {
    firstname:'Ineza',
    lastName:'Lucky Believe',
}
//let us initialize a variable and assign our calling of our function in that variable

  let meTime = lucky.display.call(details,"Rwanda","Huye")

  //let us output it in the console
  console.log(meTime);

  //the apply method is used similarly like call method 
  //they are all used to use the method holding a function in multiple  objects let us use the above objects

   let beTime = lucky.display.apply(details,["USA","Chicago"]);

   //let us display the beTime in the console

   console.log(beTime);

//    the difference btn call() method and apply() method is that
// in apply() method the arguments are taken as an Array