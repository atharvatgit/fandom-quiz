var score = 0;
var readlineSync =  require ("readline-sync");
var username = readlineSync.question("what is your name ?");
 console.log(" HELLO  "+ username  + " !");
 console.log('welcome to the quiz  lets see how much you know about valorant ') 

var questions = [{
  question : "name of the company that released valorant?  ",
    answer : "riot games"
}, {
  question: "is reyna a sentinal?   ",
   answer : "no"
}, {
  question : " the day of the game's release  ",
   answer : "2 june 2020"
},{
  question : "how many duelists are there in valorant?  ",
   answer : "5" 
 }
];

function play (question,answer){ 
  var useranswer = readlineSync.question(question);

  if (useranswer == answer) {
  score = score + 1;
  console.log("correct")
  console.log( score );
  }
  else {
    score = score -1;
  console.log( "wrong");
  }
  console.log("current score" + score);
}
 
   for (var i=0; i< questions.length; i++){
    var currentquestion = questions[i];
    play (currentquestion.question,currentquestion.answer)
   }
   console.log(" yay your score is " + score);
   console.log("thanks for playing")