const express=require('express');
const mongoose=require('mongoose')
const {videoRouter}=require('./routes/videoRouter')

const app=express();
app.use(express.json());

const DBURL="mongodb://localhost:27017/youtubeclone"

mongoose.connect(DBURL)
.then(()=>{console.log("databse connected",DBURL)})
.catch((error)=>{console.log("cannot connect DB",error)})

app.get('/' , function(req,res){
    return res.send("hello server!")
})

//arrow function
//app.get('/' , (req,res)=>{
  //  return res.send("hello server!")
//})

//additional routers
app.use(videoRouter)

app.listen(5500,function(){
    console.log("app server running on 5500")
})