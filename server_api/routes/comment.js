var express = require('express');
var router = express.Router();
var Comment = require('../model/comment');

router.post("/add",function(req,res,next){
   var postData = {
     comment:req.body.comment,
     article_id:req.body.article_id,
     device_id:req.body.device_id
   }
   Comment.create(postData,function(err,data){
     if(err==null){
       res.send({
         code:1,
         result:data._id
       });
     }
     else {
       res.send({
         code:1,
         error:err
       })
     }
   })
})
router.get("/queryByArticleId",function(req,res,next){
  var article_id = req.body.article_id
  Comment.find({article_id:article_id},function(err,data){
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

})
module.exports = router;
