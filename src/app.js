const express = require('express');
const app = express()
const subscriberModel = require('./models/subscribers')
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('../swagger.js');

  app.set('view engine', 'ejs');
  


  const myMiddleware = (req, res, next) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    console.log('Base URL:', baseUrl);
    swaggerSpecs.host = baseUrl.slice(7, baseUrl.length)
    app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    next();
  };

  app.use('/api-docs',myMiddleware);
  

  app.get('/',(req,res)=>{
    const currentURL = req.protocol + '://' + req.get('host') + req.originalUrl;
  
    res.render('index',{ curr_url_sub: `${currentURL}subscribers`, curr_url_sub_name: `${currentURL}subscribers/names`} )
   
  })

// on /subscribers will give array of all subscribers in form of array
  app.get('/subscribers', async(req,res)=>{
    try{
      const subscribersList = await subscriberModel.find()
      res.json(subscribersList)
    }catch(err){
      res.status(500).json({error: err})
    }
  })

  // on /subscribers/names will give array of all (name and subscribedChannel) in form of json inside array
  app.get('/subscribers/names', async(req,res)=>{
    try{
      const subscribersList = await subscriberModel.find({},{'_id': 0,name: 1,subscribedChannel: 1})
      res.json(subscribersList)
    }catch(err){
      res.status(500,err)
    }
  })

// on /subscribers/:id where id is params in url insted of :id required _id PRESENT in db if _id is pnt present will return an error else it will return json object 
  app.get('/subscribers/:id',async(req,res)=>{
    const id = req.params.id;
    try{
     const subscribersList = await subscriberModel.findById(id)
     
     if(subscribersList){
       res.send(subscribersList)
     }else {
      res.status(400).json({message: `${id} not found in db` })
     }
      
    }catch(err){
      res.status(500).json({error: err.message})
    }
  })

  








module.exports = app;
