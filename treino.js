

var past = document.getElementById("past");

var divs = document.getElementsByTagName("div")


var caixa1  =document.getElementById("caixa1");

var caixa2= document.getElementById("caixa2");
var selec = document.getElementById("selec")

const novo = document.createElement("div")


const som = 0

const cursos = ["HTML","CSS","Node.js","Sass","Python"]




cursos.map((el,i)=>{

    const div= document.createElement("div")

    div.innerHTML=el;

    div.classList.add("curso")

        div.setAttribute("id","c"+i)
 
var radio = document.createElement("input")

radio.setAttribute("name","name")
    radio.setAttribute("type","radio")

    div.appendChild(radio)

    caixa2.appendChild(div)


})


selec.addEventListener("click",()=>{

    const todos = [...document.querySelectorAll("input[type=radio]")]

let  fill = todos.filter((el)=>{

        return el.checked

    })

   var valor =  fill = fill[0].parentNode.innerText
   

   alert("Nice curso selecionado : "+valor)

    console.log(fill)

})