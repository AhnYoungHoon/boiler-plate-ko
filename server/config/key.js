if(process.env.NODE_ENV=== 'production'){ //process.env.Node_ENV는 환경변수, 현재 dev인지 prod인지
    module.exports=require('./prod');
} else{
    module.exports=require('./dev');
}
//강의에서는 heroku를 사용하지 않아서 굳이 안함(댓글)