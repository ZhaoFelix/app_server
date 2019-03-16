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
      prop="preview"
      label="文章简介"
      width="680">
    </el-table-column>
    <el-table-column
      prop="isDeleted"
      label="删除"
      width="40"
      >
    </el-table-column>
    <el-table-column
      prop="isPublished"
      width="40"
      label="发布">
    </el-table-column>
    <el-table-column
      prop="imageUrl"
      width="200"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="标签"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="cellType"
      label="cell类型"
      width="40"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="170">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">预览</el-button>
        <el-button type="text" size="small" @click="editArticle(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="publishArticle(scope.row)">发布</el-button>
        <el-button type="text" size="small" @click="deleteArticle(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="totalPage"
  class="my-pagination"
  @current-change="handleCurrentChange"
  :page-size="8"
  >

  </el-pagination>
</div>
</template>

<script>
import qs from 'qs'
export default {
  data() {
      return {
        tableData3: [],
        totalPage:10
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
          this.$axios.post('http://www.bedeveloper.cn:3000/list/delete',qs.stringify({
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
      },
      publishArticle(row){
        const id = row._id;
        var _this = this;
        if(row.isDeleted==1){
          this.$message({
            message:"删除的文章无法被发布！",
            type:'error'
          })
          return;
        }
        else if(row.isPublished==1){
          this.$message({
            message:"请不要重复发布！",
            type:'error'
          })
          return;
        }
        this.$confirm('发布前请先进行预览','发布',{
          confirmButtonText:'确定',
          cancleButtonText:'取消',
          type:'warning'
        }).then(()=> {
          this.$axios.post('http://www.bedeveloper.cn:3000/list/publish',qs.stringify({
            id:id
          }))
          .then(function(response){
            var re = response.data;
            if(re.code==0){
              _this.$message({
                message:"发布成功",
                type:'success'
              })
            }
            else {
              _this.$message({
                message:"发布失败",
                type:'error'
              })
            }
          })
        })
      },
      handleCurrentChange(page){
        var _this = this;
        this.$axios.post('http://www.bedeveloper.cn:3000/list/queryAll',qs.stringify({
           page:page-1
        }))
        .then(function(response){
          var re = response.data;
          if(re.code==0){
            _this.tableData3 = []
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
    },
    created:function(){
      var _this = this;
      this.$axios.post('http://www.bedeveloper.cn:3000/list/queryAll',qs.stringify({
         page:0
      }))
      .then(function(response){
        var re = response.data;
        if(re.code==0){
          _this.tableData3 = []
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

      this.$axios.get('http://sbs.bedeveloper.cn:3000/list/queryCount')
      .then(function(respose){
        var re = respose.data;
        if(re.code==0){

          _this.totalPage = re.count
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
.my-pagination {
  bottom: 200px;
  position: relative;
}
</style>
