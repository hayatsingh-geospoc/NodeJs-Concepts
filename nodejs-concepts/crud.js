const express = require('express')
const mongoose = require('mongoose')
const app = express()
require("dotenv").config()
app.use(express.json())

const port = process.env.PORT || 3000


mongoose.connect('mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/HAYAT_NEW_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb Connected")
}).catch((err) => {
    console.log(err)
})


let arr = [{
    name: "hayat",
    rollno: 1
},
{
    name: "amit",
    rollno: 2
},
{
    name: "arnab",
    rollno: 3
},
{
    name: "vikas",
    rollno: 4
}]



app.get('/getdata', (req, res) => {
    return res.status(200).send({ data: arr })
})

app.post('/createdata', (req, res) => {
    let data = req.body
    arr.push(data)
    return res.status(201).send({ "data": arr })

})

app.put('/dataupdate/:rollno', (req, res) => {

    let data = req.params.rollno
    console.log(data)
    //const {  rollno } = data
    //console.log(rollno)
    arr[0]['rollno'] = data

    return res.status(201).send({ "data": arr })

})

app.delete('/datadelete/:rollno',(req,res)=>{
   
    let data = req.params.rollno
    for(let d of arr){
        
     if(d.rollno == data){
        let dataIndex= arr.indexOf(d) 
        arr.splice(dataIndex,1)
     }
    }
    return res.status(201).send({"data":arr})

})



app.listen(port || process.env, () => {
    console.log(`port is running on ${port}`)
})

