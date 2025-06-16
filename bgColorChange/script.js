let btn = document.getElementById("clickMe")
let innerText = document.querySelector(".innerText")
let body = document.querySelector("body")
let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//VIDEO APPROACH
function getColor(){
    let rand = Math.trunc(Math.random()*16777215)
    let randColor = rand.toString(16)
    body.style.background = "#"+randColor
    innerText.innerHTML = "#"+randColor

    // to copy on clipboard automatically
    navigator.clipboard.writeText("#"+randColor)
}   

btn.addEventListener("click",getColor)
getColor()



//MY APPROCACH---------

// innerText.innerHTML = "#F466FB"
// body.style.background = "#F466FB"

// btn.addEventListener("click",()=>{
//     let color = "#"
//     for(let i=0; i<6;i++){
//         let rand = Math.trunc(Math.random()*(arr.length))
//         color += arr[rand]

//     }
//     console.log(color)
//     innerText.innerHTML = color
//     body.style.background = color 
  
// })