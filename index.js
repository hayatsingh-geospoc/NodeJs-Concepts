const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
//const databaseUrl = 
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/HAYAT_NEW_DB',{
  useNewUrlParser: true,
      useUnifiedTopology: true,
}).then(()=>{
  console.log("MongoDB connected")
}).catch((err)=>{
  console.log(err)
})

app.listen(port,()=> (console.log(`Server is running on ${port}`)))