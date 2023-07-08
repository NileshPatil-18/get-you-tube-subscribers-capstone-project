const express = require('express');
const app = express()
const subscriberModel = require('./models/subscribers')

// Your code goes here

app.get('/', async (req, res) => {
  let s 
    await subscriberModel.find((error, subscriber)=>{}).exec((error, subscriber)=> {
      if(error){
        res.error(error)
      }else{
        s= subscriber
        console.log(subscriber)
        res.json(subscriber)
      }
    })
  })

  app.get('/subscribers', async(req,res)=>{
    try{
      const subscribersList = await subscriberModel.find()
      res.json(subscribersList)
    }catch(err){
      res.status(500,err)
    }
  })

  app.get('/subscribers/names', async(req,res)=>{
    try{
      const subscribersList = await subscriberModel.find({},{name: 1,subscribedChannel: 1})
      res.json(subscribersList)
    }catch(err){
      res.status(500,err)
    }
  })

  app.get('/subscribers/:id',async(req,res)=>{
    const id = req.params.id;

    try{

     const subscribersList = await subscriberModel.findById(id)
      res.send(subscribersList)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  })










module.exports = app;
