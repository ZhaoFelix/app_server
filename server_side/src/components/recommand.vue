<template lang="html">
  <el-container style="margin-left:200px">
    <el-header>
      <el-row style="margin-top:10px;">
        <el-col :span="23.5"></el-col>
        <el-col :span="0.5"><el-button icon="el-icon-plus" circle @click.native="submit()"></el-button></el-col>
      </el-row>
    </el-header>
    <el-main >
        <el-row>
          <el-col :span="8" v-for="(item,index) in imageArr" :key="index" :offset="0" style="margin-top:20px;">
            <el-card style="background-coloe:gray">
               <el-row>
                 <el-col :span="24">
                     <img :src="item.url" alt="" width="100%">
                 </el-col>
               </el-row>
               <el-row>
                 <el-col :span="8" style="margin-top:10px;"><span  style="color:gray">添加时间{{item.createTime}}</span></el-col>
                 <el-col :span="8" >

                  <el-button v-if="item.isRecommand === 1"
                  type="warning"
                  icon="el-icon-star-on"
                  circle
                  @click.native="updateState(0,item._id)"></el-button>
                  <el-button v-else type="warning"
                  icon="el-icon-star-off"
                  circle
                  @click.native="updateState(1,item._id)"
                  ></el-button>
                 </el-col>
                 <el-col :span="8" >
                    <el-button type="danger" icon="el-icon-delete" circle @click.native="updateState(2,item._id)"></el-button>
                 </el-col>
               </el-row>
            </el-card>
          </el-col>
        </el-row>
    </el-main>
  </el-container>

</template>

<script>
import qs from 'qs';

export default {
  inject:['reload'],
  data() {
    return {
      imageArr:[]
    }
  },
  methods:{
    submit(){
      const _this = this;
      this.$prompt('请输入图片链接', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if(value!=null){
          this.$axios.post('http://www.bedeveloper.cn:3000/recommand/add',qs.stringify({
            url:value,
          }))
          .then(function(response){
            var re = response.data;
            if(re.code==0){
              _this.$message({
                message:'图片链接是: ' + value,
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
          this.$message.error('添加失败！！！');
        }

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    updateState(inx,id){
      const _this = this;
        if(inx==0){
          this.$confirm('确定要取消推荐吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            _this.updateDB(inx,id);
        }).catch(() => {

        });
        }
        else if(inx==1){
          this.$confirm('确定推荐吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            _this.updateDB(inx,id);
        }).catch(() => {

        });
        }
        else if(inx==2){
          this.$confirm('确定要删除这个推荐吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            _this.updateDB(inx,id);
        }).catch(() => {

        });
        }
    },
    updateDB(ix,id){
      const _this = this;
      this.$axios.post('http://www.bedeveloper.cn:3000/recommand/update',qs.stringify({
        tag:ix,
        id:id
      }))
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          _this.$message({
            message:'更新成功',
            type:'success'
          })
          _this.reload();
        }
        else {

        }
      })
      .catch(function(err){
        console.log(err);
      })
    }
  },
  created:function(){
      const _this = this;
      this.$axios.get('http://www.bedeveloper.cn:3000/recommand/query/pc')
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          for (var index  in re.result) {
            const data = re.result[index]
            _this.imageArr.push(data)
          }
        }
        else {

        }
      })
      .catch(function(err){

      })
  }
}
</script>

<style lang="css">
</style>
