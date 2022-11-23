let p = document.createElement('a'); // neues a Element
p.textContent = 'Alles mit DOM und JavaScript erstellt.';
p.href="Pflanzendetail.html";
p.className="tablinks";


let body = document.body;
body.appendChild(p);


function submit(){let add = document.getElementById("hinzufügen"); 

let name = document.getElementById("name").value;

let klima = document.getElementById("klima").value;

let giesseinheit = document.getElementById("giesseinheit").value;

const diePflanze = {name:name , klima:klima , giesseinheit:giesseinheit}

} 

let submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", submit);

let pflanzenliste = []; 