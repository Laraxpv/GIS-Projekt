let submitbutton = document.getElementById("submitbutton"); // Button wird gespeichert
submitbutton.addEventListener("click", submit); // Textbutton wird mit einem "Click" Listener ausgestattet

async function submit(event){
  
  event.preventDefault(); // verhindert die default submit Methode (URL wird nicht aufgerufen, sondern meine Funktion (4Befehle)werden ausgeführt)

  // holt die Textwerte aus den Textinput-Elementen
  let name = document.getElementById("name").value;
  let klima = document.getElementById("klima").value;
  let giesseinheit = document.getElementById("giesseinheit").value;

  // JSON Objekt zum Speichern der Pflanze
  let PFLANZE = {
    id: new Date().valueOf(),
    Name: name, 
    Klima: klima, 
    Giesseinheit: giesseinheit      
  }

  // Speichert Pflanze im LocalStorage
  localStorage.setItem('Pflanzen', JSON.stringify(PFLANZE)); 

  // entfernt den Key "ID"
  delete PFLANZE["id"]; 

  // die URL vom Node.js Server
  let urlForDatabaseEntry = "http://127.0.0.1:3000/setItem"; 

  // fügt das Element in die Datenbank ein
  await fetch(urlForDatabaseEntry, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(PFLANZE)
  })

  // ein Popup für das Ende der Funktion
  alert("Das Element wurde hinzugefügt");
}

/*function addItem(newItem){
  if(newItem.id){ // update
      const index = items.findIndex(item => item.id == newItem.id);
      items[index] = newItem;
  }
  else{ // add
      newItem.id = new Date().valueOf();
      items.push(newItem);
  }
  updateLocalStorage();
}*/



/*async function submit() {

    let name = document.getElementById("name").value;

    let klima = document.getElementById("klima").value;

    let giesseinheit = document.getElementById("giesseinheit").value;
    const Pflanze = {name:name , klima:klima , giesseinheit:giesseinheit}

    console.log(Pflanze);
    // Get the event title and date
      try {
        // send the event to the server
        
        let response = await fetch("http://127.0.0.1:3000/setItem", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(Pflanze)   // Objekt in String wandeln
        });
        if (response.ok) {
          console.log("Event saved to the database");
        } else {
          console.log("Error: ", response.statusText);
        }
      } catch (err) {
        console.error(err);
      }
    } */


