const express=require('express')
const { findMovies, addMovies, updateMovies, deleteMovies } = require('../controllers/moviecontrollers')
const authMiddleware = require('../middleware/authmiddleware')


const movieRoute=express.Router()



movieRoute.route('/movies')
.get(findMovies)
.post(addMovies)
movieRoute.route('/movies/:movieId')
.put(authMiddleware,updateMovies)
.delete(authMiddleware,deleteMovies)



module.exports=movieRoute