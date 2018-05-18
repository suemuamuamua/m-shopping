<template>
  <div>
    <el-menu router
      background-color="red"
      default-active="1"
      class="slide-menu">
      <el-menu-item index="page1">
        <i class="el-icon-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="page2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>爱豆资料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="page2-1">基础信息</el-menu-item>
          <el-menu-item index="page2-2">独家揭秘</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="page3">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span>后援会管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="page3-1">后援会信息</el-menu-item>
          <el-menu-item index="page3-2">后援会名单</el-menu-item>
          <el-menu-item index="page3-3">加入我们</el-menu-item>
        </el-menu-item-group>
      </el-submenu>   
      <el-menu-item index="page4">
        <i class="el-icon-date"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
  
</style>

<script>

export default {
  name: 'sidebar',
  methods: {
    
  }
}
</script>
