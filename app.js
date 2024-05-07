let game_sequence=[];
let user_sequence=[];

let start=false;
let level=0;

let h2=document.querySelector("h2");
let btns = document.querySelectorAll(".btn");

let buttons_color=["red","orange","aqua","purple"];

document.addEventListener("keypress", function() {//key press on document
    if(start==false)
    {
        start=true;
        levelup();//level up method call to incerse level if button color is right
    }
}); 

function game_flash(btn){//game flash on webpage by automatically
    btn.classList.add("flash1");//create a class on webpage
    setTimeout(function(){//to timeout for removing flash1 class
        btn.classList.remove("flash1");//remove a class on webpage
    },250);
}

function user_flash(btn){//user choice the flash which are already performed by game flash
  btn.classList.add("userflash");
  setTimeout(function(){//to timeout for removing userflash class
      btn.classList.remove("userflash");
  },250);
}

function levelup(){

    user_sequence=[];//when call levelup fun to reset array and user taking value from start

    level++;
    h2.innerText = "Level " + level;
  
    let random_index = Math.floor(Math.random() * 4);//random index create
    let random_color = buttons_color[random_index];//random color genenrate by its index that will be random index generate
    let random_color_div = document.getElementById(`${random_color}`);//here the coloured button getting
  
    game_sequence.push(random_color);//here random color name is pushing on game sequence
    
    for(loopbtns of btns){//here are 4 buttons so we used for of loop and calling game_flash fun
      game_flash(random_color_div);
    }
}

function checkbtn_Ans(index_check){//here ans was checking
  
  if(user_sequence[index_check] == game_sequence[index_check])
  {
      if(user_sequence.length  ==game_sequence.length)
      {
          setTimeout(levelup,1000);//when same color are getting
      }
  }
  else
  {
    h2.innerHTML = `Game Over! Your Score Was <b>${level}</b><br> Press any key to Start`;

    document.querySelector("body").style.backgroundColor="red";

    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },180);

    reset_game();
  }


}

function btnspreesed(){//button pressed by user logic here
      let choose_btn_color_flash=this;
      user_flash(choose_btn_color_flash);

      let usercolor=choose_btn_color_flash.getAttribute("id");//color geeting by id
      user_sequence.push(usercolor);

      checkbtn_Ans(user_sequence.length-1);//calling fun
}
for(newbtn of btns){
  newbtn.addEventListener("click",btnspreesed);
}


function reset_game(){
  start=false;
  game_sequence=[];
  user_sequence=[];
  level=0;  
}