var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectSchema = new Schema({
  article_id:{
    type:String
  },
  collect:{
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
module.exports = mongoose.model('collect_list',collectSchema);
