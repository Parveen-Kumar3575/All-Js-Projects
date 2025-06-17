let equation="";
let calculator = document.querySelector(".calculator")
let inputBox = document.querySelector("#inputBox")

calculator.addEventListener("click",(e)=>{
    console.log(e.target.innerText)
    if(e.target.innerText == '='){
        equation = eval(equation);
    }else if(e.target.innerText == "AC"){
        equation = "";
    }else if(e.target.innerText == "DEL"){
        equation = equation.slice(0,equation.length-1)
    }else{
        equation += e.target.innerText;
    }

    inputBox.value = equation;
})