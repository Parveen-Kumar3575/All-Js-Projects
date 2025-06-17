let boxes = document.querySelectorAll(".box")
let main = document.querySelector("main")
let msg = document.querySelector("#msg")
let msg_container = document.querySelector(".msg-container")
let newGame = document.querySelector("#new-btn")
let reset = document.querySelector("#reset-btn")


let winArr = ["012","345","678","048","246","036","147","258"]
let player1 = "X", player2 = "O";
let player1Str = "",player2Str =""
let player1Turn = true, player2Turn = false;
let win1 = false;
let win2 = false;




// Event Delegation Model is used on main, when anything is clicked then it is targeted
main.addEventListener("click",(e)=>{

// agr player1Turn true hogi toh X print hoga , next time it will be false and player2Turn is true then "O" will be printed
    if(player1Turn){
        if(e.target.className =="box" && e.target.innerText==""){

            //setting text inside targeted button
            e.target.innerText = player1

            //changing turns of players
            player1Turn = false;
            player2Turn = true;
            player1Str += e.target.id
        

            // it checks win condition- by default win is false 
            // ek-ek krke string num me jayega fir usse split krenge characters mein,
            //  fir dekhenge ki player1Str me saare chacrter hein ki nahi in specific string pattern

            // working :- 
            // ek ek string ayega
            // wo string ek ek charcter me divide hoga aur "d" me jayega agr player1Str sabhi chacrter  include krta hai then true
            // aur some bhi true return krega kyuki usse kuch true mil gya  
            let win1 = winArr.some(num =>
                [...num].every(d => player1Str.includes(d))
                );

            // win1 true hone pr niche wala karo jo message hide the unhide krke message dikhao
            if(win1){
                msg_container.classList.remove("hide")
                msg.innerText = "Winner : X"
            }

        }
    }else if(player2Turn){
            if(e.target.className =="box" && e.target.innerText==""){
            e.target.innerText = player2
            player1Turn = true;
            player2Turn = false;
            player2Str += e.target.id
            // console.log(player2Str)

            let win2 = winArr.some(num =>
                [...num].every(d => player2Str.includes(d))
                );

            if(win2){
                msg_container.classList.remove("hide")
                msg.innerText = "Winner : O"
            }
        }
    }
})


// reset button - when it is clicked all the variables and innertext are set to default
reset.addEventListener("click",()=>{
    player1Str = ""
    player2Str = ""
    player1Turn = true
    player2Turn = false
    msg_container.classList.add("hide")
    boxes.forEach((box)=>{
        box.innerText = ""
    })
    
})


// new button - when it is clicked the page refreshes 
newGame.addEventListener("click",()=>{
    window.location.reload()
})