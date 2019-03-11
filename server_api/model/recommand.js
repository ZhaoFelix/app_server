var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recommandSchema = new Schema({
  url:{
    type:String
  },
  createTime:{
    type:Date,
    default:Date.now()
  },
  isDeleted:{
    type:Number,
    default:0
  },
  isRecommand:{
    type:Number,
    default:0
  }
});
module.exports = mongoose.model('recommand_list',recommandSchema);
