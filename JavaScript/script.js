const click=0; // Click ist nicht defind, erst wenn was angeklickt wird, wird es auf true gesetzt
let p = document.createElement('a'); // neues a Element
p.textContent = 'By Lara'; // wird auf meiner Seite angezeigt
p.href="Pflanzendetail.html"; // Link auf externe Seite
p.className="tablinks";


let body = document.body;
body.appendChild(p);

let pflanzenliste = []; 


// const counter = document.getElementById('counter');
// const plusOne = document.getElementById('plusOne');
// const reset = document.getElementById('reset');

// let value = Number(localStorage.getItem('value'));
// counter.textContent = value;
// plusOne.addEventListener('click', () => {
//   setValue(value + 1);
// });
// reset.addEventListener('click', () => {
//   setValue(0);
// });

function setValue(x) {
  value = x;
  counter.textContent = value;
  localStorage.setItem('Kaktus', pflanze);
}


// Ein Eventlistener auf den Hyperlink, Request wird an Server geschickt wo alle Pflanzen als Array zurückgegeben werden

async function load() {
  try 
  {
    let response = await fetch(`http://127.0.0.1:3000/allePflanzen`);  //Request
    if (response.ok) {
      let pflanzen = await response.json();
      for (let i = 0; i < pflanzen.length; i++) {  // For Schleife läuft durch Tr-Element durch und appendet Name, Klima, Giesseinheit
        let plant = pflanzen[i];
        const tabelle = createElement("tr");
        const td = createElement("td");
        tabelle.appendChild(td);
        td.innerText = plant.name;
        tabelle.appendChild(td);
        td.innerText = plant.klima;
        tabelle.appendChild(td);
        td.innerText = plant.giesseinheit;
      }
          return pflanzen;
          } else {
          console.log("Error: ", response.statusText);
          }
  } catch (err) 
          {
          console.error(err);
          }
}
document.getElementById("load").addEventListener(click, load);
