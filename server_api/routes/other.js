var express = require('express');
var router = express.Router();
var Tag = require('../model/tags');
var Like = require('../model/like');
router.post('/tag/insert',function(req,res,next){
  var postData = {
    name:req.body.name
  }
  Tag.create(postData,function(err,data){
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
router.get('/tag/query',function(req,res,next){
  Tag.find({isDeleted:"0"},function(err,data){
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
router.post('/tag/delete',function(req,res,next){
  var id = req.body.id;
  Tag.update({_id:id},{isDeleted:"1"},function(err,data){
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

router.post('/like/liked',function(req,res,next){
  var postData = {
    article_id:req.body.article_id,
    device_id:req.body.device_id,
    like:"1"
  }
  console.log(postData)
  Like.create(postData,function(err,data){
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

router.post('/like/disliked',function(req,res,next){
  var postData = {
    article_id:req.body.article_id,
    device_id:req.body.device_id,
  }
  Like.update(postData,{like:"0"},function(err,data){
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
