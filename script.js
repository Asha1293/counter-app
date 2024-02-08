let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = 0

function increment()
{
    count +=  1
    countEL.textContent = count
    console.log(count)
}




function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
    console.log(count)
}

//let nom = "Asha Jacob"
//let message = "Welcome to scrimba online courses " 

//let welcomeEl= document.getElementById("welcome-el")




//welcomeEl.textContent = message + nom
//welcomeEl.textContent += "👋"



