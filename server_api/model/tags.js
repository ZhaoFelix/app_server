var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tagsSchema = new Schema({
  name:{
    type:String
  },
  createTime:{
    type:Date,
    default:Date.now()
  },
  isDeleted:{
    type:Number,
    default:0
  }
});
module.exports = mongoose.model('tags_list',tagsSchema);
