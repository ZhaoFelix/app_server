<template lang="html">
  <el-table
      class="main"
      :data="tableData"
      stripe>
      <el-table-column
        prop="createTime"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="device_id"
        label="设备ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="评论">
      </el-table-column>
    </el-table>
</template>

<script>
import qs from 'qs'
export default {
  name:'comment',
  data() {
      return {
        tableData: []
      }
    },
   created:function(){
     var _this = this;
     this.$axios.get('http://www.bedeveloper.cn:3000/comment/queryAll')
     .then(function(response){
       var re = response.data;
       if(re.code==0){
         _this.tableData = []
         for (var index  in re.result) {
           const data = re.result[index]
           _this.tableData.push(data)
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
.main {
  width: 100%;
  margin-left: 200px;

}
</style>
