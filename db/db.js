const { MongoClient } = require('mongodb');
const { movieSchema } = require('../models/movieschema');
require("dotenv").config();

const url =process.env.MNGD;
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