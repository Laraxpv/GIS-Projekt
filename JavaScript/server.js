const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

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

async function startServer() {
    // connect to database
    await mongoClient.connect();
    // optional: defaultItems einfügen, wenn Collection noch nicht existiert
    let collections = await mongoClient.db('Pflanzenapp').listCollections().toArray();
    if(!collections.find(collection => collection.name == 'angelegtePflanzen')){
        mongoClient.db('Pflanzenapp').collection('angelegtePflnzen').insertMany(defaultPlants);
    }
    // listen for requests
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

// erstellt kompletten Server

const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  const url = new URL(request.url || '', `http://${request.headers.host}`);
  const id = url.searchParams.get('id');
  const itemCollection = mongoClient.db('freezer').collection('item');
  switch (url.pathname) {
    case '/getItems':
        let items = await itemCollection.find({}).toArray();
        //console.log("getItems", items)
        response.write(JSON.stringify(items));
        break;
    case '/getItem':
        if(id){
            let items = await itemCollection.find({
                _id: new mongodb.ObjectId(id), // von Zahl zu MongoDB ID Objekt konvertieren
            }).toArray();
            //console.log("getItem", items[0]);
            response.write(JSON.stringify(items[0]));
        }
        break;

        // Eintrag wird angelegt durch setItem
        
    case '/setItem':
        if(request.method === 'POST') {
            let jsonString = '';
            request.on('data', (data) => {
                jsonString += data;
            });
            request.on('end', () => {
                newItem = JSON.parse(jsonString);
                if(newItem._id){ // update
                    //console.log("update", newItem);
                    newItem._id = mongodb.ObjectId(newItem._id); // von Zahl zu MongoDB ID Objekt konvertieren
                    itemCollection.replaceOne({
                        _id: newItem._id,
                    },
                    newItem);
                }
                else{ // add
                    //console.log("insert", newItem);
                    itemCollection.insertOne(newItem);
                }
            });
        }

        // Mein Eintrag aus Collection wird gelöscht

    case '/removeItem':
        //console.log("deleteItem", id);
        if(id){
            result = await itemCollection.deleteOne({
                _id: new mongodb.ObjectId(id), // von Zahl zu MongoDB ID Objekt konvertieren
            });
        }
        break;
    default:
        response.statusCode = 404;
  }
  response.end();
});


startServer();