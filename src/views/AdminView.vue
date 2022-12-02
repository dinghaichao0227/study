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
            default-active="/one"
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
              <el-icon><Position /></el-icon>
              <template #title>导航一</template>
            </el-menu-item>
            <el-menu-item index="/two">
              <el-icon><Position /></el-icon>
              <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="/tree">
              <el-icon><Position /></el-icon>
              <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="/four">
              <el-icon><Position /></el-icon>
              <template #title>导航四</template>
            </el-menu-item>
            <el-menu-item index="/five">
              <el-icon><Position /></el-icon>
              <template #title>导航五</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container class="box">
          <el-header class="box-header" height="50px">
            <div class="left">logo</div>
            <div class="right">退出登录</div>
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
import { Position, Expand, Fold } from '@element-plus/icons-vue';
const { default: router } = require('@/router');
import { ref } from 'vue';

const isCollapse = ref(true);
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
</script>

<style></style>
