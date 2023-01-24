getDataFromDatabase();

async function getDataFromDatabase() {
    // ruft alle Pflanzen aus der Datenbank vom Node.js Server auf
    let response = await fetch("http://127.0.0.1:3000/allePflanzen");

    // wandelt Server Antwort in ein JSON-Objekt um
    let dataJSON = await response.json();

    // fügt das Element aus dem LocalStorage in das Array dataJSON ein
    //dataJSON.push(JSON.parse(localStorage.getItem("Pflanzen")));

    // geht durch alle Elemente von dataJSON durch
    for(element of dataJSON) {
        // erzeugt Tabellen ELemente
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        // gibt dem HTML Element die Inhalte aus dem aktuellen Element der Schleife
        td1.textContent = element.Name;
        td2.textContent = element.Klima;
        td3.textContent = element.Giesseinheit;

        // speichert die Tabelle ab
        let tabelle = document.getElementById("Pflanzenliste");

        // fügt Tabellenzellen in Zeile ein und dann die Zeile in die Tabelle
        tr.append(td1,td2,td3);
        tabelle.append(tr);
    }
}