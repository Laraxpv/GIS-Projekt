const defaultPlants = [{
    id: 1,
   Name: "Kaktus",
   Klima: "Sahara ",
    imageSrc: "images/Kaktus.jpg",
},
{
    id: 2,
  Name: "Bogenhanf",
    Klima: "Tropen",
},
{
    id: 3,
   Name: "Monstera",
    Klima: "Sahara",
},]

const itemsAsJson = localStorage.getItem("Pflanzen") || JSON.stringify(defaultPlants);
let items = JSON.parse(itemsAsJson);

function updateLocalStorage(){
    localStorage.setItem("Pflanzen", JSON.stringify(items));
}

function addItem(newItem){
    if(newItem.id){ // update
        const index = items.findIndex(item => item.id == newItem.id);
        items[index] = newItem;
    }
    else{ // add
        newItem.id = new Date().valueOf();
        items.push(newItem);
    }
    updateLocalStorage();
}

function getItem(id){
    return items.find(item => item.id == id);
}

function removeItem(id){
    items = items.filter(item => item.id != id);
    updateLocalStorage();
}