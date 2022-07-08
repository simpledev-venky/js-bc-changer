const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","a","b","c","d","e","f"]
const txtColor = document.querySelector(".color")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
let hexcolor = "#"
for (let i=0; i<6; i++){
hexcolor += hex[getRandomNum()] 
}
console.log(hexcolor)
console.log(txtColor)
txtColor.style.color = hexcolor
txtColor.textContent = hexcolor

document.body.style.backgroundColor = hexcolor
})

function getRandomNum(){
return Math.floor(Math.random()*hex.length)

}