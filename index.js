let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let colArr = ["red","yellow","green","blue"];

let Highscore = 0;
let score = 0;

// document.addEventListener("keydown",function(){
//     if(!started){
//         console.log("game started");
//         started = true;
//         sc.innerText = 0;
//         levelUp();
//     }
// });

let rest = document.querySelector("#resetkey")
rest.addEventListener("click",function(){
    if(!started){
        console.log("game started");
        started = true;
        sc.innerText = 0;
        levelUp();
    }
});

let h3 = document.querySelector("h3"); 

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq = [];
    score++;
    level++;
    h3.innerText = `level ${level}`;
    // choosing a random color
    let randInd = Math.floor(Math.random() * 3);
    let randCol = colArr[randInd];
    let randbtn =document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randbtn);
}

let sc = document.querySelector("#score");
let hc = document.querySelector("#HighScore");

function checkAns(idx){
    // console.log("curr level : " + level);
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp(),4000);
        }
    } else {
        if(Highscore < score){
            // changing score value in html
            sc.innerText = score;
            // changing high score value in html
            Highscore = score;
            hc.innerText = Highscore;

        } else {
            let sc = document.querySelector("#score");
            sc.innerText = score;
        }
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> 
        Press any key to start.`;
        let bd = document.querySelector("body");
        bd.style.backgroundColor= "red";
        setTimeout(function(){
            bd.style.backgroundColor="rgb(215, 242, 250)";
        },150);

        resetf();
    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function resetf(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;    
    started = false;
}

