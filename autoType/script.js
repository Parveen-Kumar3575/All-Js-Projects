let words = ["Parveen","Student","Web Developer"]
// let charPosition = 0
let span = document.querySelector("span")

let namee = "Parveen"


let charIndex = 0 
let wordLength = 0
let revLength;
let reverseStr = false



revLength = namee.length
setInterval(()=>{

if(!reverseStr){
span.innerText += words[wordLength][charIndex]
charIndex++;
}else{
    span.innerText = span.innerText.slice(0,span.innerText.length-1)
}

// if(reverseStr){
//     // console.log("Parveen")
    
// }
if(charIndex == words[wordLength].length){
    reverseStr = true
    intervalTime = 200
}


if(span.innerText === "" && reverseStr){
    reverseStr = false
    wordLength++
    charIndex = 0
}





if(wordLength == words.length){
    wordLength = 0
}

},300)






// function reverse(word){
//     let wordLength = word.length
//     let revInterval = setInterval(()=>{
//         span.innerText = word.substring(0,wordLength)
//         wordLength--;
//         if(span.innerText.length == 0) clearInterval(revInterval)
//     },200)
// }


// // for(let i=0;i<words.length;i++){
// function callIt(i){
//     let charPosition = 0
//     span.innerText = ""
// let writer = setInterval(()=>{
    
//     span.innerText += words[i][charPosition]
    
//     if(charPosition == words[i].length-1){
//         // clearInterval(writer)
//         reverse(span.innerText)
//     }
//     charPosition++
// },200)
// }

//  let delayTime = 0;
//  let thiswordTime;
// for(let i=0;i<words.length;i++){
   
//     // let prevDelay;
//     // if(i==0){
//     //     // delayTime = words[i].length*2*200
//     //     prevDelay = 0
//     // }else{
//         thiswordTime = words[i].length*2*200
//     //     prevDelay = words[i-1].length*2*200
//     // }
    
    
//     setTimeout(()=>{
//         callIt(i)
//     },delayTime+400)
//     delayTime += thiswordTime
    
// }