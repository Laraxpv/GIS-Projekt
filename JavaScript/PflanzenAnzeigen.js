

for(item of items){ 
console.log(item)


let tr = document.createElement("tr")

let td1 = document.createElement("td")

let td2 = document.createElement("td")

let td3 = document.createElement("td")

td1.textContent = item.name;
td2.textContent = item.klima;
td3.textContent = item.giesseinheit;


tr.append(td1,td2,td3);

let tabelle = document.getElementById("Pflanzenliste");
tabelle.append(tr);



}



