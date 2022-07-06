const express=require('express')
const { findMovies, addMovies, updateMovies, deleteMovies } = require('../controllers/moviecontrollers')
const authMiddleware = require('../middleware/authmiddleware')


const movieRoute=express.Router()



movieRoute.route('/movies')
//@desc get whole movies
//@route /api/movies
//@access PUBLIC
//@method:GET
.get(findMovies)
//@desc add a movie
//@route /api/movies
//@access PUBLIC
//@method:POST
.post(addMovies)



movieRoute.route('/movies/:movieId')
//@desc update a movie
//@route /api/movies/:movieId
//@access PRIVATE
//@method:PUT
.put(authMiddleware,updateMovies)
//@desc delete a movie
//@route /api/movies/:movieId
//@access PRIVATE
//@METHOD DELETE
.delete(authMiddleware,deleteMovies)



module.exports=movieRoute