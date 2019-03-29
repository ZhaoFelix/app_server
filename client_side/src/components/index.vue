<template lang="html">
  <div class="my-container">
     <el-row class="main">
       <mavon-editor
        class="my-editor"
        v-model="content"
        defaultOpen = "preview"
        :ishljs="true"
        :scrollStyle="false"
        :subfield = "false"
        codeStyle="vs"
        :toolbarsFlag="false"
        />
     </el-row>
   </div>
</template>

<script>
import qs from 'qs';
export default {
  name:"index",
  data(){
    return {
      content:''
    }
  },
  created:function(){
    var _this = this;
    const id = this.$route.params.id;
    console.log(id);
    if (id==0){

    }
    else {
      this.$axios.post('http://www.bedeveloper.cn:3000/list/querySingle',qs.stringify({
        id:id
      }))
      .then(function(response){
        var re = response.data;
        if(re.code==0){
         _this.content=re.result[0].content;
        }
        else{

        }
      })
      .catch(function(err){

      })
    }
  }
}
</script>

<style lang="css">
.my-container {
  width: 100%;
}
#app .v-show-content{
  padding: 6px 10px;
}
#app .markdown-body pre {
  padding: 4px;
}
</style>
