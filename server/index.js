import mongoose from 'mongoose'
import Fish from './model/Fish.js';
import express from 'express';
// import path from 'path';


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());


  
  


app.get("/filter",async (req, res) =>  {
    const firstArticle = await Fish.find({ aquarium_size: { $lt: req.query.minsize} , type: { $in: req.query.neighbors}});
     console.log('request:',req.query.minsize);
    res.json( firstArticle );
  });

  app.get("/restart",async (req, res) =>  {
    const firstArticle = await Fish.find({ aquarium_size: { $lt: req.query.minsize} , Neighbors: { $in: req.query.neighbors}});
     console.log('request:',req.query.minsize);
    res.json( firstArticle );
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
