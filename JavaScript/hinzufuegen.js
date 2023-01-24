function submit(){let add = document.getElementById("hinzufuegen"); 

let name = document.getElementById("name").value;

let klima = document.getElementById("klima").value;

let giesseinheit = document.getElementById("giesseinheit").value;

const Pflanze = {name:name , klima:klima , giesseinheit:giesseinheit}
console.log(Pflanze);

addItem(Pflanze);
 
localStorage.setItem('Pflanzen', JSON.stringify(Pflanze)); 


JSON.stringify(objectRef) // Objekt in String wandeln
JSON.parse(jsonString) //String in Objekt wandeln

} 



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
    

let submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", submit);


