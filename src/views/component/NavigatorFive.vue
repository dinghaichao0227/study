<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-page-header @back="onBack" title="消息" icon="null">
        <template #content>
          <div class="avatar">
            <el-avatar class="mr-3" :size="32" :src="logo" />
            <span class="text-label"> avatar </span>

            <el-tag style="margin-left: 10px">Default</el-tag>
          </div>
        </template>
        <template #extra>
          <div class="flex items-center">
            <el-button>Print</el-button>
            <el-button type="primary" class="ml-2">Edit</el-button>
          </div>
        </template>

        <el-descriptions :column="3" size="small" class="mt-4">
          <el-descriptions-item label="Username">丁海超</el-descriptions-item>
          <el-descriptions-item label="Telephone">15142157010</el-descriptions-item>
          <el-descriptions-item label="Place">北京</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">沈阳</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Address"
            >Do you want to know my detailed address? Just dream, I will give you a dream
          </el-descriptions-item>
        </el-descriptions>
        <p class="mt-4 text-sm">
          In fact, I want to say that I really like programming so far. Maybe it’s because I don’t have a job, but it’s
          not important. I will still do what I like when I get to work. I’m still the playful person. Child
        </p>
      </el-page-header>
    </el-card>
  </div>
</template>

<script setup>
import { ElNotification as notify } from 'element-plus';
import { logo } from '@/config/logo';
const onBack = () => {
  notify('点我干嘛你没有消息');
};
</script>
<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
}
.text-label {
  margin-left: 10px;
}
</style>
