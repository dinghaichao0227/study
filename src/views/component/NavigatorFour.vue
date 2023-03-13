<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card">
      <div>
        <!-- <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <el-icon><Plus /></el-icon>
        </el-upload> -->
        <div class="card-header-right">介绍</div>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange" v-for="(item, index) in textList" :key="index">
        <el-collapse-item :name="item.id">
          <template #title>
            <h6>{{ item.label }}</h6>
          </template>
          <div>
            {{ item.content }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { textList } from '@/components/textList/index';
const activeNames = ref(['1']);
textList;
// const textList = reactive([
//   {
//     id: 1,
//     label: '第一章',
//     content: 'what are you'
//   },
//   {
//     id: 2,
//     label: '第二章',
//     content: 'fack up',
//   },
//   {
//     id: 3,
//     label: '第三章',
//     content: 'I want a better tomorrow',
//   },
//   {
//     id: 4,
//     label: '第四章',
//     content: 'Goodbye yesterday, tomorrow will be better',
//   },
//   {
//     id: 5,
//     label: '第五章',
//     content: 'Goodbye yesterday, tomorrow will be better',
//   },
//   {
//     id: 6,
//     label: '第六章',
//     content: 'Goodbye yesterday, tomorrow will be better',
//   },
//   {
//     id: 7,
//     label: '第七章',
//     content: 'Goodbye yesterday, tomorrow will be better',
//   },
// ]);

const handleChange = () => {
  // console.log(val);
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 89vh;
  overflow-y: auto;

  &-header {
    display: flex;
    background-color: #fff;

    &-left {
      width: 150px;
      height: 150px;
      border: 1px solid #fff;

      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
