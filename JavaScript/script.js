let p = document.createElement('a'); // neues a Element
p.textContent = 'By Lara';
p.href="Pflanzendetail.html";
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