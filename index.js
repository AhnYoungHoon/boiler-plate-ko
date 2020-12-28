const express = require('express');
const app=express();
const port =5000;
const bodyParser=require('body-parser');

const config =require('./config/key');

const { User }=require("./models/User");

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 갖고오게 해줌
app.use(bodyParser.urlencoded({extended: true}));

//json 타입으로 된거를 가져오게 해줌
app.use(bodyParser.json());

const mongoose= require('mongoose');


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log(err));  

app.get('/', (req, res)=> res.send('Hello World! 안녕하세요!!'));



app.post('/register', (req, res)=>{
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  
  const user= new User(req.body); //req.body안에는 json형식으로 정보가 들어있음
  //bodyparser가 있어서 가능한것
  user.save((err, doc)=>{
    if(err) return res.json({ success: false, err});
    return res.status(200).json({
      success: true
    }); //status200은 성공했다는 뜻
  });
})


app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));