let choices = document.querySelector(".choices")
let user_score = document.querySelector("#user-score")
let comp_score = document.querySelector("#comp-score")
let msg = document.querySelector("#msg")


let optionArr = ["rock", "paper", "scissors"]
let userChoice;
let pcOption;
userpoints = 0
compPoints = 0



choices.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG") {
        //selecting targeted images id for user choice
        userChoice = e.target.parentElement.id

        // random computer selection between 0-2 coz optionArr has 3 elements , so that we can select random index 
        pcOption = Math.trunc(Math.random() * 3)

        // console.log("userchoice ", userChoice)
        // console.log("pcOption ", optionArr[pcOption])

        // win conditions - pehla userChoice hai aur dusra pc Choice, r-> rock, p -> paper, s->scissor
        //  r == r -> draw
        //  r == p -> comp
        //  r == s -> user
        //  p == r -> user
        //  p == p -> draw
        //  p == s -> comp
        //  s == r -> comp
        //  s == p -> user
        //  s == s ->  draw 



        if (userChoice == optionArr[pcOption]) {
            console.log("draw")
            msg.innerText = `It is draw !`
            msg.style.background = "#2a2a2a"
        } else if (userChoice == "rock") {
            if (optionArr[pcOption] == "scissors") {
                // console.log("user Wins")
                msg.innerText = `You Won : ${userChoice} beats ${optionArr[pcOption]}`
                msg.style.background = "green"
                user_score.innerText = ++userpoints
            }else{
            // console.log("Computer wins ")
            msg.innerText = `Computer Won : ${optionArr[pcOption]} beats ${userChoice}`
            msg.style.background = "red"
            comp_score.innerText = ++compPoints
            }
        } else if (userChoice == "paper") {
            if (optionArr[pcOption] == "rock") {
                // console.log("user wins ")
                msg.innerText = `You Won : ${userChoice} beats ${optionArr[pcOption]}`
                msg.style.background = "green"
                user_score.innerText = ++userpoints
            }else{
            // console.log("Computer wins ")
            msg.innerText = `Computer Won : ${optionArr[pcOption]} beats ${userChoice}`
            msg.style.background = "red"
            comp_score.innerText = ++compPoints
            }
        } else if (userChoice == "scissors") {
            if (optionArr[pcOption] == "paper") {
                // console.log("user wins")
                msg.innerText = `You Won : ${userChoice} beats ${optionArr[pcOption]}`
                msg.style.background = "green"
                user_score.innerText = ++userpoints
            }else{
            // console.log("Computer wins ")
            msg.innerText = `Computer Won : ${optionArr[pcOption]} beats ${userChoice}`
            msg.style.background = "red"
            comp_score.innerText = ++compPoints
            }
        }
    }
})