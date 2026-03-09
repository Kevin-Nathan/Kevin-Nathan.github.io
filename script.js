const typingText = [
"Digital Skills Trainer",
"Technology Enthusiast",
"Educational Content Creator",
"Innovation & Learning Advocate"
]

let index = 0
let charIndex = 0
let currentText = ""
let isDeleting = false

function type(){

const typingElement = document.querySelector(".typing")

if(index < typingText.length){

if(!isDeleting && charIndex <= typingText[index].length){

currentText = typingText[index].substring(0,charIndex++)
typingElement.textContent = currentText

}

if(isDeleting && charIndex >= 0){

currentText = typingText[index].substring(0,charIndex--)
typingElement.textContent = currentText

}

if(charIndex == typingText[index].length){
isDeleting = true
setTimeout(type,1000)
return
}

if(isDeleting && charIndex === 0){
isDeleting = false
index++
}

}

if(index === typingText.length){
index = 0
}

setTimeout(type,100)

}

document.addEventListener("DOMContentLoaded",type)
