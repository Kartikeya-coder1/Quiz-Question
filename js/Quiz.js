class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      question.hide()            
    //write code to change the background color here
      background("lime")
    //write code to show a heading for showing the result of Quiz
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
      textSize(30)
      fill("red")
      stroke("red")  
      if(contestant.answer === "2"){  
        background("lime")  
      text("CORRECT ANSWER !!!!",100,50)
      console.log("hello")
      text(contestant.name,250,270)
      
      }
      else{
        background("orange")
        fill("blue")
        text("INCORRECT ANSWER....(Correct answer - 2)",100,50)
        console.log("XXX")
        // text(contestant.name,250,250)
      }
      
        
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

   
        if(allContestants!==undefined){
          var location = 250

          fill("blue")
          textSize(20)
          console.log("MaX")
         text("NOTE: Contestants whose answers were correct are highlighted in red",150,220)
        }

   
    for (var plr in allContestants){
      var correctAns = "2"
      if (correctAns === allContestants[plr].answer) {
          fill("red")
         
        }
        else {
          fill("black")
          // text("INCORRECT ANSWER !",100,50)
        }
        location = location+50
        text(allContestants[plr].name+" : "+allContestants[plr].answer,400,location)
    }


    //write code to highlight contest who answered correctly
    
  }

}
