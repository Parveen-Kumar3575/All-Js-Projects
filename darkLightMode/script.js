let full_dark_chk = document.querySelector("#full-dark-chk")
let body = document.querySelector("body")
let innerBoxContainer = document.querySelector(".innerBox")
let cont_dark_chk = document.querySelector("#cont-dark-chk")

full_dark_chk.addEventListener("change",()=>{
    if(full_dark_chk.checked){
        body.classList.add("dark")    
        innerBoxContainer.classList.add("dark")
        localStorage.setItem("fullBG",JSON.stringify(true))
        localStorage.setItem("contBG",JSON.stringify(true))
    }else{
        body.classList.remove("dark")
         innerBoxContainer.classList.remove("dark")   
         localStorage.setItem("fullBG",JSON.stringify(false))
         localStorage.setItem("contBG",JSON.stringify(false))
    }
    cont_dark_chk.checked = full_dark_chk.checked
})

cont_dark_chk.addEventListener("change",()=>{
    if(cont_dark_chk.checked){
        innerBoxContainer.classList.add("dark")
        localStorage.setItem("contBG",JSON.stringify(true))
    }else{
        innerBoxContainer.classList.remove("dark")
        localStorage.setItem("contBG",JSON.stringify(false))
    }
})

function defaultColor(){
    let fullBgVal = JSON.parse(localStorage.getItem("fullBG"))
    let contBgVal = JSON.parse(localStorage.getItem("contBG"))
    
    full_dark_chk.checked = fullBgVal
    console.log(fullBgVal)
    console.log(contBgVal)
    full_dark_chk.dispatchEvent(new Event("change"))

    cont_dark_chk.checked = contBgVal
    cont_dark_chk.dispatchEvent(new Event("change"))
}

defaultColor()