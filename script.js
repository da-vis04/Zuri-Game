function guessNumber() {
    Username = prompt("Enter your Username");
   function validateusername(Username){
        if (Username.length<10 && Username.length >0){
            return true
        }
        else{
            return false
        }
    }
    
    while (validateusername(Username) == false){
        Username = prompt("Username must be less than 10")
    }
    let i=3;
    let randomNum = Math.floor(Math.random() * i);
    // console.log(randomNum);
    var Guess;
   stage =2;
   let score =1;
   function input() {
    //let stage=1
    
     let randomNum = Math.floor(Math.random() * i);
     console.log(randomNum);
   // var Guess;
    Guess = prompt("please enter a number btw 0 and 2");
    console.log("Your guess is:" + Guess);
    if( Guess < randomNum){
        alert("Your guess is too low");
        alert("Game Over")
    }else if (Guess > randomNum) {
        alert("Your guess is too high");
        alert("Game Over")
    }else if (Guess == randomNum) {
        alert("Your guess is right");
        i++
        randomNum++
        alert("Your score is:" + score++ ) 
        alert('Proceed to the next level') 
        alert( "STAGE"+ stage++)
        input()++    
    }
    else if( Guess != randomNum){
       alert("GAME OVER");
   }else{
      alert("Pls Enter a Number");
   }
   }
   input();

}











