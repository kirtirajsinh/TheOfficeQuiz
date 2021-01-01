const readlinesync = require('readline-sync');
var score = 0;
var Highscores = [{
  Name:"Kirtirajsinh",
  Score:"5"
  
}];


var userName = readlinesync.question("Please Enter Username ");
console.log(`Welcome ${userName} \n`);
console.log("Lets Test Your The Office Knowledge \n")


function play(question,answere,options){
    console.log(question)
    var userans = readlinesync.keyInSelect(options);
    if(options[userans].toUpperCase() === answere.toUpperCase()){
      console.log("Yay! you are Right");
      score++;
      console.log("Score +1")
      console.log("Total Score "+score)
      
      
    }else{
        console.log("Nope, you are Wrong");
        score--;
        console.log("Score -1");
        console.log("Total Score "+score)
       
      }
     
    
      

  }

var collection = [{
  question:"Which Award was Given EveryYear To the Scranton Branch Of Pennsylvania?  ",
  answere:"Dundie",
  options:["Aundie","Mundie","Dundie"]
},{
  question:"what did Jim eats Everday for Lunch? ",
  answere:"ham and cheese sandwich",
  options:["Butter Sandwich","ham and cheese sandwich","cheese Burger"]
},{
  question:"By which animal did Dwight refers to Angela? ",
  answere:"Monkey",
  options:["Monkey","Cat","Puppy"]
},{
  question:"In which season did stamford? ",
  answere:"Season3",
  options:["Season4","Season3","Season5"]
},{
  question:"where did Andy went to study Undergraduation? ",
  answere:"Cornell",
  options:["Cornell","Stanford","cambridge"]
}];


//Loop to get Question from the Array.
for(var i = 0;i<collection.length;i++){
  play(collection[i].question,collection[i].answere,collection[i].options);
  console.log("---------------------------")
}