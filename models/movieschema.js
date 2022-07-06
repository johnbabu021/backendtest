const {db} =require('../db/db')

 const movieSchema=()=>{
    db.createCollection('movie',{
        validator:{
            $jsonSchema:{
                bsonType:'object',
                required:['moviename','rating','cast','genere','releasedate'],
                properties:{
                    moviename:{
                        bsonType:'string',
                        description:"movie name must be a string and is required"
                    },
                    rating:{
                        bsonType:"double",
                        description:"rating must be a number and is required"
                    },
                    cast:{
                        bsonType:"array",
                        description:"cast must be an array and is requried"
                    },
                    genere:{
                        bsonType:"string",
                        description:"genere is required and is required",
                    },
                    releasedate:{
                        bsonType:"date",
                        description:'date must be a type of date and must be presenet'
                    }
                }
            }
        }
    })
}
module.exports={movieSchema}