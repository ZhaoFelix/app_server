<template>
  <div >
    <el-container>
      <el-main style="padding:5px 0">
        <el-carousel :interval="4000" arrow="always" height="609px" width="281px">
          <el-carousel-item v-for="(item,index) in items" :key="index">
            <img :src="item.url" alt="" >
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
    <el-footer>
      <div style="margin-top:10px">
        欢迎大家使用这个App</br>
        这是一个专注于Swift学习的应用，祝大家学有所成！</br>
        若有疑问，欢迎发送邮件至<span style="color:red">zhaofelix@126.com</span>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[
        {
          url:require("@/assets/1.png")
        },
        {
          url:require("@/assets/2.png")
        },
        {
          url:require("@/assets/3.png")
        },
      ]
 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
