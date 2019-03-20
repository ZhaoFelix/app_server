var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
  comment:{
    type:String
  },
  article_id:{
    type:String
  },
  device_id:{
    type:String
  },
  createTime:{
    type:Date,
    default:Date.now()
  },
});
module.exports = mongoose.model('comment_list',commentSchema);
