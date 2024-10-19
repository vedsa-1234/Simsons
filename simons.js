let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];

let h2 =document.querySelector("h2");
let body = document.querySelector("body");
let started = false;
let level = 0;

document.addEventListener("keypress", () =>{
    if(started == false){
        console.log("game started");
        started = true; 

        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() =>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() =>{
        btn.classList.remove("userflash");
    },250);
}




function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);

}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,600);
        }
    } else{
        h2.innerHTML = `game Over your score <b>${level}<b> <br> press any key to start`;
        body.style.backgroundColor = "red";
        setTimeout(() =>{
            body.style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
