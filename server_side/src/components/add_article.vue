<template lang="html">
  <div class="main">
      <el-input
      placeholder="请输入文章的标题"
      clearable
      v-model='blogTitle'
      ></el-input>
      <el-input
      placeholder="请输入封面图片链接"
      clearable
      v-model='blogImageUrl'
      class="image-input"
      ></el-input>
      <el-row class="my-row">
        <el-col :span="3">请选择前端cell的类型：</el-col>
        <el-col :span="4">
          <el-radio v-model="radio" label="1">大图</el-radio>
          <el-radio v-model="radio" label="2">小图</el-radio>
          <el-radio v-model="radio" label="3">无图</el-radio>
        </el-col>
        <el-col :span="17"></el-col>
     </el-row>
      <mavon-editor  :toolbars="toolbars" class="my-editor" v-model="content" style="max-height:700px"/>
      <div class="tags">
          <el-tag class="my-tag"
            :class="{active:tagArr.indexOf(index)!==-1}"
            v-for="(tag,index) in tags"
            :id="'tag'+index"
            @click.native="clickSelected(index,tag)"
            :key="index"
            >{{tag.name}}</el-tag>
      </div>
      <div class="bottom">
        <el-button type="primary" class="my-btn" @click.native="submit()">提 交</el-button>
      </div>
    </div>
</template>

<script>
import qs from 'qs'

export default {
  data(){
    return{
      toolbars: {
              bold: true, // 粗体
              italic: true, // 斜体
              header: true, // 标题
              underline: true, // 下划线
              mark: true, // 标记
              superscript: true, // 上角标
              quote: true, // 引用
              ol: true, // 有序列表
              link: true, // 链接
              imagelink: true, // 图片链接
              help: true, // 帮助
              code: true, // code
              subfield: true, // 是否需要分栏
              fullscreen: true, // 全屏编辑
              readmodel: true, // 沉浸式阅读
              /* 1.3.5 */
              undo: true, // 上一步
              trash: true, // 清空
              save: true, // 保存（触发events中的save事件）
              /* 1.4.2 */
              navigation: true // 导航目录
            },
        blogTitle:'',
        blogImageUrl:'',
        content:'',
        tagArr:[],
        inx:-1,
        tags:[],
        selectedTags:[],
        radio:"0"
    }
  },
  methods:{
    submit(){
      const id = this.$route.params.id;
      const _this = this;
      console.log(this.radio);
      if(this.blogTitle && this.blogImageUrl && this.content && this.radio){

      var tagStr = '';
      for (var i=0;i<this.selectedTags.length;i++) {
          tagStr += this.selectedTags[i]+" ";
      }
      //更新文章
      if(id!=0){
        console.log(id);
        this.$axios.post('http://localhost:3000/list/update',qs.stringify({
          _id:id,
          title:this.blogTitle,
          content:this.content,
          imageUrl:this.blogImageUrl,
          tag:tagStr,
          cellType:this.radio
        }))
        .then(function(response){
          var re = response.data;
          console.log(re.code);
          if(re.code==0){
            _this.$message({
              message:'更新成功',
              type:'success'
            })
            _this.$router.push({path:`/preview/${id}`})
          }
          else {

          }
        })
        .catch(function(err){
          console.log(err);
        })

        return;
      }

        //文章添加
      this.$axios.post('http://localhost:3000/list/add',qs.stringify({
        title:this.blogTitle,
        content:this.content,
        imageUrl:this.blogImageUrl,
        tag:tagStr,
        cellType:this.radio,
      }))
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          _this.$message({
            message:'添加成功',
            type:'success'
          })

        }
        else {

        }
      })
      .catch(function(err){
        console.log(err);
      })

      }
      else {
        this.$alert('信息不能为空', '错误', {
          confirmButtonText: '确定',
          callback: action => {
            console.log("回调函数")
          }
        });
      }
    },
    clickSelected(index,tag){
      this.inx = index;
      if(this.tagArr.length>=1){
        this.$alert('最多只能选择一个标签','提示',{
          confirmButtonText:'确定',
          callback:action=>{
            //点击确定时调用
          }
        })
      }
      else if(this.tagArr.indexOf(index) == -1){
        this.tagArr.push(index)
        this.selectedTags.push(tag.name);
      }
    }
  },
  computed:{

  },
  created:function(){
    var _this = this;
    const id = this.$route.params.id;
    if(id==0){

    }
    else {
      //编辑文章
      this.$axios.post("http://localhost:3000/list/querySingle",qs.stringify({
        id:id
      }))
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          const data =  re.result[0];
          _this.blogTitle = data.title;
          _this.blogImageUrl = data.imageUrl;
          _this.content = data.content
        }
        else {

        }
      })
      .catch(function(err){
        console.log(err);
      })
    }
    //获取标签
    this.$axios.get("http://localhost:3000/other/tag/query")
    .then(function(response){
      var re = response.data;
      if(re.code==0){
        for (var obj in re.result) {
          var data = re.result[obj]
          _this.tags.push({name:data.name,type:'',id:data._id})
          // console.log(_this.tags);
        }
      }
      else{
        _this.$message({
          message:'查询信息失败',
          type:'error'
        })
      }
    })
    .catch(function(error){

    })
  }
}
</script>

<style lang="css">
.main {
  width: 100%;
  height: 900px;
}
.my-editor {
  margin-top: 20px;
}
.image-input {
  margin-top: 10px
}
.bottom {
  height: 100px;
  /* background-color: #EBEEF5; */
  width: 100%;
  bottom: 0px;
  margin-top: 20px;
}
.my-btn {
  margin-top: 30px;
  float: right;
  margin-right: 50px;
}
.my-tag{
  margin:  10px;
}
.active {
  border: 1px solid red
}
.tags{
  text-align: left
}
.my-row{
  margin-top: 20px;
}
</style>
