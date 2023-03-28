<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据分析</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="echarts">
      <echart-line class="echarts-left" :dataX="dataX" :dataY="dataY" :name="name" ></echart-line>
      <echart-line class="echarts-right" :dataX="dataD" :dataY="dataDs" :name="name2"></echart-line>
    </div>
    <div class="echarts">
      <echart-bar class="echarts-right" :dataX="dataD" :dataY="dataDs" :dataLine="dataLine1" :name="name2"> </echart-bar>
      <echart-bar class="echarts-right" :dataX="dataX" :dataY="dataY" :dataLine="dataLine2" :name="name"> </echart-bar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EchartLine from '../../config/EchartLine.vue';
import EchartBar from '../../config/EchartBar.vue';
const name = ref('2021年');
const name2 = ref('2022年');
const dataX = ref(['一月', '二月', '三月', '四月', '五月', '六月', '七月','8月', '9月', '10月', '11月', '12月', '13月', '14月']);
const dataY = ref([30, 20, 30, 50, 20, 40, 20, 30, 20, 30, 50, 20, 40, 20]);
const dataD = ref(['一月', '二月', '三月', '四月', '五月', '六月', '七月  ']);
const dataDs = ref([10, 20, 30, 40, 20, 40, 20]);
const dataLine1 = ref([10, 20, 30, 40, 20, 40, 20])
const dataLine2 = ref([30, 20, 30, 50, 20, 40, 20, 30, 20, 30, 50, 20, 40, 20])
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 500px;
  display: flex;
}
.echarts-left {
  width: 40vw;
  height: 400px;
  display: flex;
}
.echarts-right {
  width: 40vw;
  height: 400px;
  display: flex;
}
</style>
