
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
            'my names are '+ this.name +' and I\'m '+this.age;
        }
    }
  }
  const newMe = newTime ('Ineza Lucky Believe',18);

  let myNm = newMe.display(); 

   let paragraph = document.querySelector('p');
//    console.log(paragraph);
   let button = document.querySelector('.myName');
//    console.log(button);

function revealMe () {
    let Hello = newMe.display()

    paragraph.innerText = 'Ineza Lucky Believe and I\'m 18 years old ';
}
// console.log(paragraph.innerText);

 button.addEventListener('click',revealMe);
