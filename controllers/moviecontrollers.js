const { ObjectId } = require("mongodb")
const { movieCollection } = require("../db/db")

const findMovies=async(req,res)=>{
  let resultedData= await movieCollection.find().toArray()
  if (resultedData.length==0)
  res.status(204).json("sorry empty")
  res.status(200).json(resultedData)
}
const addMovies=async(req,res)=>{
   const resultedData= await movieCollection.insertOne({
        moviename:req.body.moviename,
        rating:req.body.rating,
        cast:req.body.cast,
        genere:req.body.genere,
        releasedate:req.body.releasedate
    })
    res.status(200).json(resultedData.insertedId)

}

const updateMovies=async(req,res)=>{
    const resultedData=await movieCollection.updateOne({
        _id:new ObjectId(req.params.movieId),

    },
    {
        $set:{
            moviename:req.body.moviename,
            rating:req.body.rating,
            cast:req.body.cast,
            genere:req.body.genere,
            releasedate:req.body.releasedate
        }
    }
    
    ).then(()=>{
        res.status(200).json(`data updated in ${req.params.movieId}`)
    }).catch(err=>{
        res.status(500).json(err)
    })
}
const deleteMovies=async(req,res)=>{
    const deletedData=await movieCollection
    .deleteOne({_id:new ObjectId(req.params.movieId)}) 
    .then(()=>{
        res.status(410).json("data deleted")
    })
    .catch(err=>{
        res.status(500).json(err)
    })
}
module.exports={
    findMovies,
    addMovies,
    updateMovies,
    deleteMovies
}