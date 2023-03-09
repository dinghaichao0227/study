<template>
  <div>
    <div class="common-layout">
      <el-container class="home">
        <el-aside class="aside" width="auto">
          <div @click="onExpand">
            <el-icon v-if="isCollapse === true"><Expand /></el-icon>
            <el-icon v-else><Fold /></el-icon>
          </div>
          <el-menu
            router
            :default-active="$route.path"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            background-color="#F0FFFF"
            @open="handleOpen"
            @close="handleClose"
            style="
              --el-menu-bg-color: #f0f0f065;
              --el-menu-hover-bg-color: #f0ffff;
              --el-menu-level: 0;
              border-right: none;
            "
          >
            <el-menu-item index="/one">
              <el-icon><House /></el-icon>
              <template #title>首页</template>
            </el-menu-item>
            <el-menu-item index="/two">
              <el-icon><Aim /></el-icon>
              <template #title>数据分析</template>
            </el-menu-item>
            <el-menu-item index="/tree">
              <el-icon><View /></el-icon>
              <template #title>模式</template>
            </el-menu-item>
            <el-menu-item index="/four">
              <el-icon><Bell /></el-icon>
              <template #title>文章</template>
            </el-menu-item>
            <el-menu-item index="/five">
              <el-icon><User /></el-icon>
              <template #title>关于</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container class="box">
          <el-header class="box-header" height="50px">
            <div class="left">logo</div>
            <div class="right" @click="onUnLogin">退出登录</div>
          </el-header>
          <el-main class="box-main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
// import {ref} from 'vue';
import { onMounted, ref } from 'vue';
const { default: router } = require('@/router');

const isCollapse = ref(false);
const onUnLogin = () => {
  router.push('./login');
};
const handleOpen = (index) => {
  router.push(index);
};
const handleClose = () => {
  // console.log(2);
};
const onExpand = () => {
  isCollapse.value = !isCollapse.value;
  // console.log(isCollapse.value != isCollapse.value);
};
onMounted(() => {
  console.log(1);
});
</script>

<style></style>
