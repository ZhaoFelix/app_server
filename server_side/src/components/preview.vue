<template lang="html">
 <div class="my-container">
   <el-row class="main">
     <mavon-editor
      class="my-editor"
      v-model="content"
      style="height:812px;"
      defaultOpen = "preview"
      :ishljs="true"
      :scrollStyle="false"
      :subfield = "false"
      codeStyle="dark"
      :toolbarsFlag="false"
      />
   </el-row>
 </div>
</template>

<script>
import marked from 'marked';
import qs from 'qs';

var rendererMD = new marked.Renderer()
marked.setOptions({
renderer: rendererMD,
gfm: true,
tables: true,
breaks: false,
pedantic: false,
sanitize: false,
smartLists: true,
smartypants: false
})

export default {
  data(){
    return {
      toolbars:{

      },
      content:``
    }
  },
  computed:{
    compiledMarkdown:function(){
      return marked(this.content,{sanitize:true})
    }
  },
  created:function(){
    var _this = this;
    const id = this.$route.params.id;
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
  width: 375px;
  height: 812px;
  /* border: 1px solid gray; */
  margin: 10px auto;
}


</style>
