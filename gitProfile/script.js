let inputName = document.querySelector("input[type=text]")
let main = document.querySelector(".main")
let div = document.createElement("div")
div.classList.add("Profiledetails")
main.appendChild(div)

inputName.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        detailsPrint(inputName.value)
        // inputName.value=""
    }
})

inputName.addEventListener("focusout",()=>{
    detailsPrint(inputName.value)
})

async function getRepos(username) {
    let response2 = await fetch(`https://api.github.com/users/${username}/repos`)
    let data2 = await response2.json()
    let repoNameList = [];

    
    if(data2.length > 10){
        for(let i=0;i<10;i++){
            repoNameList.push(`<a href='${data2[i].html_url}'>${data2[i].name}</a href='${data2[i].html_url}'>`)
        }
    }else if(data2.length <= 10){
        for(let i=0;i<data2.length;i++){
            repoNameList.push(`<a href='${data2[i].html_url}'>${data2[i].name}</a href='${data2[i].html_url}'>`)
        }
    }

    return Promise.resolve(repoNameList.join(""))
}




async function detailsPrint(username = "parveen-kumar3575"){  

    
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json()

    // Check for 404 or other errors
    if (!response.ok) {
      if (response.status === 404) {
        div.innerHTML = `<h2>User not found</h2>`;
      } else {
        div.innerHTML = `<h2>Error: ${response.status}</h2>`;
      }
      return; // Stop execution
    }

    let repoListData = await getRepos(username)

    div.innerHTML = `
        <div class="image">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="details">
                <h2 class="userName">${data.name}</h2>
                <h4 class="bio">${data.bio}</h4>
                <h4 class="followDetails">
                    <span>${data.followers} Followers</span>
                    <span>${data.following} Following</span>
                    <span>${data.public_repos} Repos</span>
                </h4>
                <p class="reposName">
                   ${repoListData}
                </p>
            </div>
    `
    }




detailsPrint()