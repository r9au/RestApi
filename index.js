const exp=require('express');
const app=exp();
const cors=require('cors')
require('dotenv').config();
const port=process.env.PORT;
app.use(cors())
app.use(exp.json())
app.get('/',async(req,res)=>{
    try{
        let resp=await fetch('https://jsonplaceholder.typicode.com/posts')
    let resu=await resp.json()
    console.log(resu)
    res.status(200).json(resu)
    }catch(err){
        res.status(500).json(err)
    }
})
app.get('/update',async(req,res)=>{
    try{
        let resp=await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PUT',
        body:JSON.stringify({
            id:'Update1',
            title:'u hit an update',
            body:'update request',
            userId:'1'
        }),
        headers:{'content-type':'application/json; charset=UTF-8'}
    })
    let resu=await resp.json()
    console.log(resu)
    res.status(200).json(resu)
    }
    catch(err){
        res.status(500).json(err)
    }
})
app.listen(port,(req,res)=>{
    console.log(`app listening on port`)
})