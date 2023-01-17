function submit(){let add = document.getElementById("hinzufuegen"); 

let name = document.getElementById("name").value;

let klima = document.getElementById("klima").value;

let giesseinheit = document.getElementById("giesseinheit").value;

const Pflanze = {name:name , klima:klima , giesseinheit:giesseinheit}
console.log(Pflanze);

addItem(Pflanze);
 
//localStorage.setItem('Pflanzen', JSON.stringify(Pflanze));
} //


let submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", submit);

