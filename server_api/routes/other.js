var express = require('express');
var router = express.Router();
var Tag = require('../model/tags');
var Like = require('../model/like');
var Collect = require('../model/collect');
var Article  = require('../model/article');
var mongoose = require('mongoose');
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

router.post('/collect/collected',function(req,res,next){
  var postData = {
    article_id:req.body.article_id,
    device_id:req.body.device_id,
    collect:"1"
  }
  console.log(postData)
  Collect.create(postData,function(err,data){
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

router.post('/collect/query',function(req,res,next){
  var postData = {
    device_id:String(req.body.device_id),
    collect:"1"
  }

 var sendData = []
  Collect.find(postData,function(err,data){
    console.log(postData)
     if(err==null){
       for(var i=0;i<data.length;i++) {
         console.log(data[i].article_id)
         var _id = mongoose.Types.ObjectId(data[i].article_id)
       Article.find({_id:_id},function(err,data){
         if(err==null){
           sendData.push(data)
           if(i==data.length){
             res.send({
               code:0,
               result:sendData
             })
           }
         }
         else {
           res.send({
             code:1,
             error:err
           })
         }
       })
     }
     }
     else{
       res.send({
         code:1,
         error:err
       })
     }
  })
  .limit(8)
  .skip(0)
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

router.post('/collect/discollected',function(req,res,next){
  var postData = {
    article_id:req.body.article_id,
    device_id:req.body.device_id,
  }
  Collect.update(postData,{collect:"0"},function(err,data){
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
