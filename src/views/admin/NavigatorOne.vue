<template>
  <div>
    <el-card class="box-card">
      <el-button class="btn" type="primary" size="small" @click="handleClickCreate">Create</el-button>
      <el-table :data="tableData" :key="updateKdy" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClickEdit(row)">Edit</el-button>
            <el-button link type="primary" size="small" @click="handleClickDel">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
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
    <EditView :visible="EditDialogFormVisible" @closed="changeClosed"></EditView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CreateView from '@/components/CreateView.vue';
import EditView from '@/components/EditView.vue';
import { tableList } from '@/components/table/index.js';

const dialogFormVisible = ref(false);
const EditDialogFormVisible = ref(false);
const pageSize = ref(10);
const currentPage = ref(100);
const small = ref(true);
const disabled = ref(false);
const total = ref(tableList.length);
const updateKdy = ref(Number);
const tableData = tableList;

onMounted(() => {
  console.log(tableData, 890);
});
const OnChange = (ruleForm) => {
  tableList.push({
    id: ruleForm.id,
    date: ruleForm.date1,
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
const handleClickEdit = (index) => {
  EditDialogFormVisible.value = true;
  console.log(index, 90);
};
const handleClickDel = () => {
  console.log(4);
};
</script>
<style lang="scss" scoped></style>
