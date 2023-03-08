<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-Form"
    :size="formSize"
    status-icon
  >
    <el-form-item label="time" required>
      <el-col :span="11">
        <el-form-item prop="date">
          <el-date-picker
            format="YYYY-MM-DD"
            v-model="ruleForm.date"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="state" prop="state">
      <el-switch v-model="ruleForm.state" />
      <!-- <el-input v-model="ruleForm.state" /> -->
    </el-form-item>
    <el-form-item label="city" prop="city">
      <el-input v-model="ruleForm.city" />
    </el-form-item>
    <el-form-item label="address" prop="address">
      <el-input v-model="ruleForm.address" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import Bus from '../../config/bus.js';
const formSize = ref('default');
const ruleFormRef = ref();
const ruleForm = reactive({
  name: '定海超',
  date: '',
  state: false,
  city: '',
  address: '',
});

const rules = reactive({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 1, max: 10, message: '请填写姓名', trigger: 'blur' },
  ],

  city: [
    { required: true, message: 'Please input city', trigger: 'blur' },
    { min: 1, max: 10, message: '请填写城市', trigger: 'blur' },
  ],
  address: [
    { required: true, message: 'Please input address', trigger: 'blur' },
    { min: 1, max: 1000, message: '请填写地址', trigger: 'blur' },
  ],
  date: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
});
const submitForm = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      //这个方法存在缺陷 传基础数据有一些问题
      Bus.$emit('form', ruleForm);
      ruleFormRef.value.resetFields();
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.resetFields();
};
onMounted(() => {});
</script>
