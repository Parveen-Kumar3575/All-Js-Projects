let passField = document.querySelector(".passField")
let lengthField = document.querySelector("#leng")
let generateBtn = document.querySelector(".generate")
let lowerChk = document.querySelector("#lower")
let upperChk = document.querySelector("#upper")
let numChk = document.querySelector("#num")
let symChk = document.querySelector("#symbol")


let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = lower.toUpperCase();
let num = "1234567890";
let sym = "<>!@#$%^&*"

let randChars = (str) =>{
    return str[Math.trunc(Math.random() * (str.length))]
}


// let randStr = (passStr = "")=>{
    
// }


let getRandPass = () =>{
    let length = lengthField.value
    let passStr = ""
    if(length){

    //    console.log(length)
    //    console.log(passStr.length)

    if(length > 50){
        alert("Password length is too high , Make the password length short")
        return ""
    }else{
        while(passStr.length < length){
            if(upperChk.checked){
                passStr += randChars(upper)
            }
             if(lowerChk.checked){
                passStr += randChars(lower)
            }
            if(numChk.checked){
                passStr += randChars(num)
            }
            if(symChk.checked){
                passStr += randChars(sym)
            }

            if(passStr.length == 0){
                alert("No checkbox selected");
                break;
            }
            // console.log(passStr)
            // if(passStr.length >= length){
            //     console.log(passStr);
            //     break;
            // }
        }    
        // console.log(window)
        return passStr.substr(0,length)
    }   
    }else{
        alert("Please Enter Length For Password");
    }
}


generateBtn.addEventListener("click",()=>{
    let randPass = getRandPass();
    navigator.clipboard.writeText(randPass)
    passField.value = randPass;
})



