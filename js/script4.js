//Récupérer len contenu d'un élément HTML
const val=document.getElementById("c").textContent
console.log(val)

//mofification du contenu d'un élément HTML

//document.getElementById("c").innerHTML="0"

//fonction qui permet de compte

function compte(){
    let val1=document.getElementById("c").textContent
    val1++
    document.getElementById("c").innerHTML=val1
    if(val1==5){
        document.getElementById("d").innerHTML="c'est 5"
    }
    else if(val1==10){
        document.getElementById("d").innerHTML="c'est 10"
    }
    else if(val1==15){
        document.getElementById("d").innerHTML="c'est 15"
}
else{
        document.getElementById("d").innerHTML=""
}
}