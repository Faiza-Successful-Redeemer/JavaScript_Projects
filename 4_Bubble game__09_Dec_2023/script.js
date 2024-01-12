// code to create bubble 

function makeBubble(){

    var clutter = "";
    
    for(var i = 1; i<=168; i++){
        var rn = Math.floor(Math.random()*10);
        // clutter += `<div class="bubble"> ${i} </div>`;
        clutter += `<div class="bubble"> ${rn} </div>`;
        
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble();

// code for timer 

var timer = 60;
function runTimer(){
   var timerInt =  setInterval(() => {
        if(timer>0){

            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over &#128540;</h1> <br><br><br><br> <h1> Your Score is: ${score}</h1>`;
        }
    }, 1000);
}

runTimer();

// code for hit
var hitrn = 0;
function getNewHit(){
    hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();


// for score

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



document.querySelector("#pbtm").addEventListener("click", function(details){
   var clickedNum = Number(details.target.textContent);
   if(clickedNum === hitrn){
increaseScore(); 
makeBubble();
getNewHit();
   }
})

