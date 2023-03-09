<template>
  <div class="login">
    <el-card class="login-card">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="150px" class="demo-input">
        <el-form-item label="UserName" prop="UserName" label-width="120px">
          <el-input v-model.number="ruleForm.UserName" />
        </el-form-item>
        <el-form-item label="Password" prop="pass" label-width="120px">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <el-button class="btn-submit" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button class="btn-reset" @click="resetForm(ruleFormRef)">重置</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import router from '../../router';
const ruleFormRef = ref();

const ruleForm = reactive({
  pass: '',
  UserName: '',
});

const rules = reactive({
  UserName: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  pass: [{ required: true, message: 'Please input Activity pass', trigger: 'blur' }],
});

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      sessionStorage.setItem('Username', ruleForm.UserName);
      sessionStorage.setItem('pass', ruleForm.pass);
      // localStorage.setItem('token', '1');
      router.push('./one');
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
