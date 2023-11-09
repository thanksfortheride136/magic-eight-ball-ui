//Create an event listener
document.getElementById('askButton').addEventListener('click', function(){
   let answer = ''; //create answer variable to log answers
   let randomIndex = Math.floor(Math.random() * 5); //create randomIndex variable to hold a random rounded number

   if(randomIndex === 0){
    answer = 'It is certain';
   } else if(randomIndex === 1){
    answer = 'Ask again later';
   } else if(randomIndex === 2){
    answer = 'Yes, definitely';
   } else if(randomIndex === 3){
    answer = 'My reply is no';
   } else{
    answer = 'Very doubtful';
   }

   let question = document.getElementById('question').value;
   if(question.trim() === ''){
    alert("PLease enter a question");
   } else{
    document.getElementById('answer').textContent = answer;
   }

});





//Conditional statement to set answer variable to a phrase

//get value of the question element via ID


//Conditional to check if you wrote a question, if so display your forture, if not alert.