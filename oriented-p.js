
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


//Factory function  

function createCircle (radius){
    return {
       radius,
       draw: function (){
        console.log('draw');
       }
    };
}
const circle = createCircle(1);

//using constructor functions

 function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
 }
 const another = new Circle(1);

 console.log(another);

//  these were the two ways in which you can make object in an effective way


function Myname(firstname,lastName){
    this.firstname = firstname;
    this.lastName = lastName;
    this.display = function (){
        return 'my names are '+ this.firstname + this.lastName;
    }
}
const anotherName = new Myname('Ineza ','Lucky Believe');

console.log(anotherName.display());

//the effective way that i've chosen among the two is using constructor function method in making the object


//let's use the factory function in making the object 

function myname (name,age) {
    return {
        name,
        age,
        draw : function (){
            return "my names are "+this.name +",I'm "+this.age;
        }
    }    
}
const myname2 = myname('lucky Believe',17);

;
console.log(myname2.draw());

function Getters (name,intrests) {
    this.name = name;
    this.intrests = intrests;
     
    let age = 18

    this.getAge = function(){
        return age;
    }

    this.display = function() {
        return "my mames are "+this.name+" and my intrests are "+this.intrests[0]+" and "+this.intrests[1]; 
    }
    
    Object.defineProperty(this,'age',{
    get: function(){
        return age;
    },
    set: function (value){
        // if(value !==18){
        //     throw new error('invalid age.');
        // }
        age = value;
    }
    
   })
}
  
const realTime = new Getters('Ineza Lucky Believe',['coding','playing video games'])

// realTime.age = 24;
console.log(realTime);
console.log(realTime.display());

// console.log(realTime.age);