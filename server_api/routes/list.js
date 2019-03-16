var express = require('express');
var router = express.Router();
var Article  = require('../model/article');
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("list");
});

router.post('/add',function(req,res,next){
//添加文章
  var postData = {
    title:req.body.title,
    createTime:this.time,
    content:req.body.content,
    imageUrl:req.body.imageUrl,
    isDeleted:req.body.isDeleted,
    isPublished:req.body.isPublished,
    tags:req.body.tag,
    cellType:req.body.cellType,
    preview:req.body.preview
  }
  console.log(postData);
  Article.create(postData,function(err,data){
    if(err==null){
      res.send({
        code:0,
        error:err
      });
    }
    else {
      res.send({
        code:1,
        result:data._id
      })
    }
  })
});
router.post('/queryAll',function(req,res,next){
 //文章列表
 var page = req.body.page;
  Article.find({},function(err,data){
    if(err==null) {
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
  .limit(8)
  .skip(page*8)
  .sort({'createTime':1})
})

router.get('/queryCount',function(req,res,next){
  Article.where({}).countDocuments(function(err,count){
    if(err) return handleError(err);
    res.send({
      code:0,
      count:count
    })
  })
})
router.post('/queryByTag',function(req,res,next){
   const tag = req.body.tag;
   const page = req.body.page;
   Article.find({tags:tag+" "},function(err,data){
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
   .limit(8)
   .skip(page*8)
   .sort({'createTime':1})
})
router.post('/querySingle',function(req,res,next){
  //根据ID查询指定的文章列表
  Article.find({_id:req.body.id},function(err,data){
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
router.post('/update',function(req,res,next){
    var postData = {
      title:req.body.title,
      createTime:time,
      content:req.body.content,
      imageUrl:req.body.imageUrl,
      isDeleted:0,
      isPublished:0,
      tags:req.body.tag,
      cellType:req.body.cellType,
      preview:req.body.preview,
    }
   console.log(req.body._id);

  //更新
  Article.update({_id:req.body._id},postData,function(err,data){
    if(err==null){
      res.send({
        code:0,
        error:err
      })
    }
    else {
      res.send({
        code:1,
        result:data
      })
    }
  })
})
router.post('/delete',function(req,res,next){
  //删除文章
  Article.update({_id:req.body.id},{isDeleted:'1'},function(err,data){
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
router.post('/publish',function(req,res,next){
  //删除文章
  Article.update({_id:req.body.id},{isPublished:'1'},function(err,data){
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
