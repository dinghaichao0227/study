<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-input
        :clearable="true"
        v-model="input"
        placeholder="Please input"
        @keyup.enter="onShow"
        style="width: 200px; height: 28px"
      />
      <el-button class="btn" type="primary" size="small" @click="onShow">搜索</el-button>
      <el-button class="btn" type="primary" size="small" @click="handleClickCreate">Create</el-button>
      <el-table :data="tableData" :key="updateKdy" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="date" label="日期" width="150"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column label="状态" width="120">
          <template #default="scope">
            <el-switch v-model="scope.row.state" disabled />
          </template>
        </el-table-column>
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="address" label="地址" width="600" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleClickEdit(scope.row)">Edit</el-button>
            <el-popconfirm
              width="220"
              confirm-button-text="OK"
              @confirm="handleClickDel(scope.row)"
              cancel-button-text="No, Thanks"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="Are you sure to delete this?"
            >
              <template #reference>
                <el-button link type="primary" size="small">Delete</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[15, 25, 35, 45, 50]"
        :small="small"
        :disabled="disabled"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <CreateView :visible="dialogFormVisible" @closed="changeClosed" @change="OnChange"></CreateView>
    <EditView :visible="EditDialogFormVisible" :form="ruleForm" @closed="changeClosed"></EditView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CreateView from '@/components/CreateView.vue';
import EditView from '@/components/EditView.vue';
import { tableList } from '@/components/table/index.js';
import { formatTime } from '../../config/day';
import Bus from '../../config/bus.js';
import { InfoFilled } from '@element-plus/icons-vue';

const dialogFormVisible = ref(false);
const EditDialogFormVisible = ref(false);
const pageSize = ref(10);
const currentPage = ref(100);
const small = ref(true);
const disabled = ref(false);
const total = ref(tableList.length);
const updateKdy = ref(Number);
var tableData = ref(tableList);
var ruleForm = {};
const input = ref('');
const onShow = () => {
  tableData.value = tableData.value.filter((item) => {
    return input.value === item.name;
  });
};
//手写的方法存在一定的缺陷 传基本数据还存在一些问题
Bus.$on('form', (arr) => {
  tableList.push({
    date: formatTime(arr.date),
    name: arr.name,
    state: arr.state,
    city: arr.city,
    address: arr.address,
  });
  if (arr) {
    Bus.$off('form');
  }
  console.log(arr, 222);
});

onMounted(() => {
  console.log(tableData, 890);
});

const OnChange = (ruleForm) => {
  tableList.push({
    date: formatTime(ruleForm.date),
    name: ruleForm.name,
    state: ruleForm.state,
    city: ruleForm.city,
    address: ruleForm.address,
  });
  updateKdy.value += 1;
};

const handleSizeChange = (value) => {
  pageSize.value = value;
  console.log(1);
};
const handleCurrentChange = (value) => {
  currentPage.value = value;
  console.log(2);
};
const handleClickCreate = () => {
  // dialogFormVisible.value.open(true);
  dialogFormVisible.value = true;
};
const changeClosed = () => {
  dialogFormVisible.value = false;
  EditDialogFormVisible.value = false;
};
const handleClickEdit = (row) => {
  EditDialogFormVisible.value = true;
  row.id;
  ruleForm = row;
  console.log(row);
};
const handleClickDel = (row) => {
  console.log(row.Id);
  tableData.value = tableData.value.filter((item) => {
    return item.Id != row.Id;
  });
  console.log(tableData.value);
};
</script>
<style lang="scss" scoped></style>
