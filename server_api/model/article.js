var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title:{
    type:String
  },
  createTime:{
    type:Date,
    default:Date.now()
   },
  content:{
    type:String
  },
  imageUrl:{
    type:String
  },
  isDeleted:{
    type:Number,
    default:0
  },
  isPublished:{
    type:Number,
    default:0
  },
  tags:{
    type:String
  },
  cellType:{
    type:String
  }
})
module.exports = mongoose.model('article_lists',articleSchema);
