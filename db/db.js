const { MongoClient } = require('mongodb');
const { movieSchema } = require('../models/movieschema');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const db = client.db('backendtest');
const movieCollection=db.collection('movie')
async function connect(){
    try{
      await  client.connect()
        console.log('connected succesfully')

        
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