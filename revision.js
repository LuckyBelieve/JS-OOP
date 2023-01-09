
function myWord (word){
   let myReversedNonVowel = '';
   for(let i=word.length-1;i>0;i--){
    let nonVowel = word[i].toLowerCase();
    if(nonVowel=='a' || nonVowel=='e' || nonVowel=='i' || nonVowel=='u' || nonVowel=='o'){
        continue;
    }
    myReversedNonVowel+=word[i];
   }
   return myReversedNonVowel;
}
console.log(myWord('Academy'));

function myLongSentense (mySentense){
   let myArray = mySentense.split(" ");
   let maxWord = 0;
   let londWord;
   for(let y=0;y<myArray.length;y++){
    if(myArray[y].length>maxWord){
        maxWord = myArray[y].length;
        longWord = myArray[y];

    }
   }
   return longWord;
}
 console.log(myLongSentense('my beautiful girlfriends')); 


 //yes we did it !!!!

 function Myname (name,age){
    this.name = name,
    this.age = age,
    this.display = function(){
        return "my names are "+this.name+" and I'm "+this.age;

    }
 }
 const newName = new Myname('Ineza Lucky Believe',17);
 console.log(newName.display());


 //setting properties of the object that is already declared

//  newName.firstname = 'Neza ';
newName['first-Name'] = 'Neza'
  console.log(newName['first-Name']);

  function newTime (name,age) {
    return {
        name,
        age,
        display: function () {
           return 'my names are '+ this.name +' and I\'m '+this.age+ ' years old.';
        }
    }
  }
  const newMe = newTime ('Ineza Lucky Believe',18);


   let paragraph = document.querySelector('p');
//    console.log(paragraph);
   let button = document.querySelector('.myName');
//    console.log(button);

function revealMe () {
    paragraph.innerText = newMe.display();
}
// console.log(paragraph.innerText);

 button.addEventListener('click',revealMe);

 function Setters (name,hobbies) {
    this.name = name;
    this.hobbies = hobbies;
    let age = 23;

    this.display = function (){
       return 'my names are '+this.name+' and my hobbies are '+this.hobbies[0]+' and '+this.hobbies[1];
    }

    Object.defineProperty(this,'age',{
        get:function (){
            return age;
        },
        set:function(value){
            age = value;
        }
    })
 }
const newSetter = new Setters('Ineza Lucky Blieve',['coding','playing video games']);
console.log(newSetter);

console.log(newSetter.display());

//let's us proceed with prototypes

Setters.prototype.Money = 2000;

console.log(newSetter.Money);

//as we are seeing this codes above prototypes allows us to set other properties to the parent object 
//and those properties are then set to other object created from the parent object 

//let's try to add a method using prototype

Setters.prototype.hello = function(){
    return 'Hello '+this.name;
    // if(me<18){
    //     throw new error('you\'re still young');
    // }
    // else{
    //     throw new error('vote');
    // }
}
newSetter.hello();

console.log(newSetter.hello());

 const Lucky = {
    names: 'INEZA Lucky Believe',
    age:18,
    hobbies:'coding',
    display: function(country,city){
        return 'my names are '+this.names+' I\'m '+this.age+' and my hobbies are '+this.hobbies+' and my home country is '+country+' and my city is '+city;
    }
 }
 console.log(Lucky.display('Rwanda','Huye'));

 const Mary = {
    names:'ABEZA Mary Repy Happiness',
    age:13,
    hobbies:'studying',
 }
 let helloWorld = Lucky.display.apply(Mary,'Rwanda','Huye');

 console.log(helloWorld);

