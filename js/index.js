console.log("its working")
const $ = el =>document.querySelectorAll(el)
const $1 = el =>document.querySelector(el)

const toggleIcons = $(".fa-icon")
const article = $("article")
const container =$1(".container")

container.addEventListener("click",function(e){
    console.log(e.target.dataset.id)
    //deactivating and activating buttons
    const id =e.target.dataset.id
    if(id){
toggleIcons.forEach((icon)=>{icon.classList.remove("active")
e.target.classList.add("active")
    })
    //function for switching articles
article.forEach(function(content){
content.classList.remove("show")
const element =document.getElementById(id)
element.classList.add("show");

})
    }
    
})
