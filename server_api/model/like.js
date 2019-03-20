var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var likeSchema = new Schema({
  article_id:{
    type:String
  },
  like:{
    type:String,
    default:"0"
  },
  device_id:{
    type:String
  },
  createTime:{
    type:Date,
    default:Date.now()
  },
});
module.exports = mongoose.model('like_list',likeSchema);
