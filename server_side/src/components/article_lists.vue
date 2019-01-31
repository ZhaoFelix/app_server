<template lang="html">
<div class="main">
  <el-table
    :data="tableData3"
    height="900"
    border
    style="width: 100%;">
    <el-table-column
      prop="createTime"
      label="添加日期"
      width="180"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="title"
      label="文章标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="isDeleted"
      label="是否被删除"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="isPublished"
      width="80"
      label="是否发布">
    </el-table-column>
    <el-table-column
      prop="imageUrl"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="标签">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="130">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">预览</el-button>
        <el-button type="text" size="small" @click="editArticle(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="deleteArticle(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  layout="prev, pager, next"
  :total="10"
  class="my-pagination"
  >

  </el-pagination>
</div>
</template>

<script>
import qs from 'qs'
export default {
  data() {
      return {
        tableData3: []
      }
    },
    methods:{
      handleClick(row){
        const id = row._id;
        this.$router.push({path:`/preview/${id}`})
      },
      editArticle(row){
        const id = row._id;
        this.$router.push({path:`/add/${id}`})
      },
      deleteArticle(row){
        const id = row._id;
        var _this = this;
        this.$confirm('确认要删除这篇文章吗','删除',{
          confirmButtonText:'确定',
          cancleButtonText:'取消',
          type:'warning'
        }).then(()=>{
          this.$axios.post('http://localhost:3000/list/delete',qs.stringify({
            id:id
          }))
          .then(function(response){
              var re = response.data;
              if(re.code==0){
                for (var obj of _this.tableData3) {
                  console.log(obj);
                  if(obj._id==id){
                    _this.tableData3.splice(_this.tableData3.indexOf(obj),1)
                  }
                }
                _this.$message({
                  message:"删除成功",
                  type:'success'
                })
              }
              else {

              }
          })
          .catch(function(err){

          })
        })

      }
    },
    created:function(){
      var _this = this;
      this.$axios.get('http://localhost:3000/list/queryAll')
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          for (var index  in re.result) {
            const data = re.result[index]
            _this.tableData3.push(data)
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
}
.my-pagination {
  bottom: 40px;
  position: relative;
}
</style>
