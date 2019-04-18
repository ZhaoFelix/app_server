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


let result = []; //存放查询结果
let doc1 = []; //存放第一次查询的结果
Collect.find(postData).exec().then((doc) => {
    doc1 = doc;
    const promises = doc.map(item => Article.findOne({_id:mongoose.Types.ObjectId(item.article_id)}));
    return Promise.all(promises);
})
.then((bankInfoList) => {//promise.all返回的结果是一一对应的
    for(let i=0; i<doc1.length; i++){
        let obj = {};

        Object.assign(obj, JSON.parse(JSON.stringify(doc1[i])), JSON.parse(JSON.stringify(bankInfoList[i])));
        result.push(obj);
    }
    return new Promise((resolve, reject) => {
            resolve(result);
    })
})
.then((result) => {
    return new Promise(() => {
        res.json({ code: 0, result: result});
        return;
    });
})
.catch((e) => {
    console.log(e);
    res.json({ code: -1, msg: '查询失败'});
    return;
});


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
