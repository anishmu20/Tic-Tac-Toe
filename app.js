let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgame =document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;//playerX,playerO
let count =0
const winPattern=[
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const resetgame=()=>{
  turnO=true
  enableboxes();
  msgcontainer.classList.add('hide');
  count=0
}

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText='O';
      box.style.color="#a51c30"
      turnO=false;
    }
    else{
      box.innerText='X';
      box.style.color="#5465ff"
      turnO=true
    }
    box.disabled=true
    count++;
    let iswinner=checkWinner()
if(count===9 && !iswinner){
  gamedraw()
}

  })
 
})

const disabledboxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }

}
const enableboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText=""
  }

}
const gamedraw=()=>{
  msg.innerText="Game was Drawn"
  msgcontainer.classList.remove('hide')
  disabledboxes()
}



const showWinner=(winner)=>{
  msg.innerText=`Congratulations Winner ${winner}`;
  msgcontainer.classList.remove('hide');
  disabledboxes()

}


const checkWinner=()=>{
   for(let pattern of winPattern){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("winner",pos1)
        showWinner(pos1);
      }
    }
   }
}

newgame.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)



