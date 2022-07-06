const express=require('express')
const { connect } = require('./db/db')
const cors=require('cors')
var cookieParser = require('cookie-parser')
const { movieSchema } = require('./models/movieschema')
const authMiddleware = require('./middleware/authmiddleware')
const app=express()
app.use(express.json())
connect()
app.use(cors())
app.use(cookieParser('1234'))

//call this stuff only once this creates the schema
// movieSchema()
app.get('/',authMiddleware)

app.listen(process.env.PORT||3000,()=>{
    console.log('your app is listening to port 3000')
})