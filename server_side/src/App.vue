<template>
  <div id="app" v-title data-title="管理">
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu :default-openeds="['1']" >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>导航目录</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="To('lists')"><i class="el-icon-document"></i>博客列表</el-menu-item>
            <el-menu-item index="1-2" @click="To('add')"><i class="el-icon-edit"></i>添加博客</el-menu-item>
            <el-menu-item index="1-3" @click="To('recommand')"><i class="el-icon-message"></i>首页推荐</el-menu-item>
            <el-menu-item index="1-5" @click="To('tag')"><i class="el-icon-mobile-phone"></i>博客标签</el-menu-item>
            <el-menu-item index="1-4" @click="To('comment')"><i class="el-icon-news"></i>评论反馈</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
     <router-view v-if="isRouterAlive" > </router-view>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide (){
     return {
       reload:this.reload
     }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    To(str){
      if(str=='add' || str=="preview"){
        this.$router.push({path:`/${str}/0`})
      }
      else {
        this.$router.push({path:`/${str}`})
      }
    },
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}
.el-aside {
  position: fixed;
  z-index: 2;
  height: 800px;
  background-color: white;
}
.el-menu {
  border: none;
}
</style>
