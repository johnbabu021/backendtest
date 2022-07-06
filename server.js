const express=require('express')
const { connect, db } = require('./db/db')
const cors=require('cors')
var cookieParser = require('cookie-parser')
const { movieSchema } = require('./models/movieschema')
const authMiddleware = require('./middleware/authmiddleware')
const movieRoute = require('./routes/movieroutes')
const app=express()
app.use(express.json())
connect()
app.use(cors())
app.use(cookieParser('1234'))

try{
    db.listCollections({name: 'movie'})
    .next(function(err, collinfo) {
        // console.log(collinfo)
       if(!collinfo){
        console.log('not exist')
        movieSchema()
       }
       else{
        console.log('exist')
       }
    });
}
catch(err){
    console.log(err)
}
app.use('/api',movieRoute)

app.listen(process.env.PORT||3000,()=>{
    console.log('your app is listening to port 3000')
})