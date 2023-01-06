
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