var express = require('express');
var router = express.Router();
var Recommand = require('../model/recommand');


//添加推荐
router.post('/add',function(req,res,next){
  var url = req.body.url;
  Recommand.create({url:url},function(err,data){
    if(err==null){
       res.send({
         code:0,
         result:data._id
       })
    }
    else{
      res.send({
        code:1,
        error:err
      })
    }
  })
})
//设置为推荐
router.post('/update',function(req,res,next){
  var id = req.body.id;
  var tag = req.body.tag;
  var updatedata = '';
  if(tag==0){
    updatedata = {isRecommand:"0"};
  }
  else if(tag==1){
    updatedata = {isRecommand:"1"};
  }
  else if(tag==2){
    updatedata = {isDeleted:"1"};
  }

  Recommand.update({_id:id},updatedata,function(err,data){
    if(err==null){
      res.send({
        code:0,
        result:data
      })
    }
    else {
      res.send({
        code:1,
        error:err
      })
    }
  })
})

//查询
router.get('/query',function(req,res,next){
  Recommand.find({isDeleted:"0"},function(err,data){
    if(err==null){
      res.send({
        code:0,
        result:data
      })
    }
    else {
      res.send({
        code:1,
        error:err
      })
    }
  })
})

module.exports = router;
