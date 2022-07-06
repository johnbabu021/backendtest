const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const db = client.db('backendtest');
const movieCollection=db.collection('movie')
async function connect(){
    try{
      await  client.connect()
        console.log('connected succesfully')

        db.listCollections({name: 'movie'})
    .next(function(err, collinfo) {
        console.log(collinfo)
       if(!collinfo){
        console.log('exists')
        movieSchema()
       }
       else{
        console.log('not exist')
       }
    });
    }
    catch(e){
        console.log(e)
    }
}
module.exports={
    
    connect,
    movieCollection,
    db
    

}