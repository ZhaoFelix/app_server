<template lang="html">
<div class="content">
<el-tag
v-for="tag  in tags"
:key = "tag.name"
closable
:type="tag.type"
@close="handleClose(tag)"
class="my-tag"
>
{{tag.name}}
</el-tag>
<el-input
class="input-new-tag"
v-if="inputVisible"
v-model="inputValue"
ref="saveTagInput"
size="small"
@keyup.enter.native="handleInputConfirm"
@blur="handleInputConfirm"
>
</el-input>
<el-button
v-else class="button-new-tag"
size="samll"
@click="showInput"
>
<i class="el-icon-plus"></i>
</el-button>
</div>
</template>

<script>
import qs from "qs";

export default {
 data(){
   return {
     tags:[],
     inputValue:'',
     inputVisible:false
   }
 },
 methods:{
   handleClose(tag){
     var _this = this;
     this.$confirm("确定要删除该标签吗？",'温馨提示',{
       confirmButtonText:'确定',
       cancleButtonText:'取消',
       type:'warning'
     }).then(()=>{

        this.$axios.post("http://localhost:3000/other/tag/delete",qs.stringify({
          id:tag.id
        }))
        .then(function(response){
          var res = response.data;
          if(res.code==0){
            _this.tags.splice(_this.tags.indexOf(tag),1);
          }
          else {
            console.log(res.error)
          }
        })
        .catch(function(err){
          console.log(err);
        })
     }).catch(()=>{
     })
   },
   showInput(){
     this.inputVisible = true
     this.$nextTick(_ => {
       this.$refs.saveTagInput.$refs.input.focus();
     })
   },
   handleInputConfirm(){
     let inputValue = this.inputValue;
     var _this = this;
     if(inputValue){
       this.$axios.post('http://localhost:3000/other/tag/insert',qs.stringify({
         name:inputValue
       }))
       .then(function(response){
         var re = response.data;
         if(re.code==0){
           _this.tags.push({
             name:inputValue,
             type:'info'
           });
         }
         else {
           console.log(re.err);
         }
       })
       .catch(function(error){
         console.log(error);
       })

     }
     this.inputVisible = false;
     this.inputValue = '';
   }
 },
 created:function(){
   var _this = this;
   this.$axios.get('http://localhost:3000/other/tag/query')
   .then(function(response){
     var re = response.data;
     if(re.code==0){
        for (var obj in re.result) {
          var data = re.result[obj]
          _this.tags.push({name:data.name,type:'',id:data._id})
        }
     }
   })
 }

}
</script>

<style lang="css" scoped>
.my-tag{
  margin: 10px;
}
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>
