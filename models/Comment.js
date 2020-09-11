var mongoose=require('F:/node/NPMfiles/node_modules/mongoose');

var commentSchema=mongoose.Schema({
    text:String,
    author:String
});

module.exports=mongoose.model("Comment",commentSchema);