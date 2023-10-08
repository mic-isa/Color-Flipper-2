let body = document.getElementById("body")

 let button = document.getElementById("button")
 let colors =["Red", "Green", "Purple", "Yellow", "Violet"]
 
button.addEventListener("click",function(){
   let rando = Math.floor(Math.random()*5)
 document.getElementById("para").innerHTML= colors[rando]
  body.style.backgroundColor= colors[rando]
})
