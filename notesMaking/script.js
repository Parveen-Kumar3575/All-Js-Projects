let addBtn = document.querySelector(".addBtn")
let main = document.querySelector(".main")

// notes ko save krne k lie - jab kisi bhi notebox k save button pr click ho toh saare notebox k textarea k value ko fetch kia
// aur usse store krdia localStorage k andr
let saveNotes = ()=>{
    let data = [];
    let noteBoxes = document.querySelectorAll(".noteBox")
    noteBoxes.forEach((noteBox)=>{  
        let textValue = noteBox.querySelector("textarea").value
        let identity = noteBox.id
        // id aur text ko push krdia localstorage me 
        data.push({text : textValue, id : identity})
        console.log(data)
    })

    localStorage.setItem("notes",JSON.stringify(data));
}

// note add krne k lie - iss function ko getNotes() bhi use kr ra hai but agr new addNote add krna hai toh uske text , id me 
// kuch b ni hoga islie default para empty hai jo pass kie hai  
let addNote = (text = "",id = "")=>{

    let uniqueID;
    if(id==""){
        // isse bilkul unique yaani ultra unique ids generate hongi 
         uniqueID = Date.now()+Math.random().toString(36).slice(2)
    }else{
        uniqueID = id
    }
    // console.log(text + " " +id)
    // console.log()

    // ye elemnt create krke fir append krna ek classic tareeka hota hai
    let div = document.createElement('div')
    div.classList.add('noteBox')
    div.id = `${uniqueID}`
    div.innerHTML = `
                <div class="tools">
                   <i class="fa-solid fa-floppy-disk save"></i>
                   <i class="fa-solid fa-trash delete"></i>
                </div>
               <textarea>${text}</textarea>
    `

    main.appendChild(div)


    // ye ni krna chaiye hume kyuki behind the scene ye ek aur nahi add krta balki pura scratch se innerHTML likhta hai,
    // islie prefer kro appendChild hi use kro 
    // main.innerHTML += `<div class="noteBox" id='${uniqueID}'>
    //        </div> `
}

// ye page load hone pr chalega , saara data localStorage se fetch krega aur uske baad display krwa dega 
let getNotes = ()=>{
    console.log(localStorage.getItem("notes"))
    let noteBoxDetails = JSON.parse(localStorage.getItem("notes")) || []
    console.log(noteBoxDetails)
    noteBoxDetails.forEach((noteBoxDetail)=>{
        addNote(noteBoxDetail.text,noteBoxDetail.id)
    })
}

getNotes()


// yaha event delegation use hua hai - jaise hi kisi particular delete pr click hoga tab hum uss targeted button ka parent element
// access krenge aur usse remove krenge , but content toh reh hi jayega localStorage me toh wo kaise hoga ?

// ANS  - uske lie humne jo content hai usko save krte hue humne uske sath localstorage me id, text ko sath me store kia hai,
// toh jab hum delete button pr click krenge tab hum jo noteBox hai uska id acces krenge aur fir search krenge us id ko localStorage
// k andr jo id hai uske sath aur match krte hi hum usko delete krdenge filter k through aur fir new data ko push back krdenge
// localStorage me  
main.addEventListener("click",(e)=>{
    console.log(e.target)
// ye delete icon code 
    if(e.target.classList.contains('delete')){
        let outer = e.target.parentElement

        let ObjToDelete = outer.parentElement.id

        let data = JSON.parse(localStorage.getItem("notes"))
        let updatedData = data.filter((dd)=>{
           return dd.id != ObjToDelete
        })

        localStorage.setItem("notes",JSON.stringify(updatedData))

        outer.parentElement.remove()
    }

// ye save icon ka code
    if(e.target.classList.contains("save")){
        saveNotes()
        alert("Notes Saved !")
    }
})

addBtn.addEventListener("click",()=>{
   addNote()

})