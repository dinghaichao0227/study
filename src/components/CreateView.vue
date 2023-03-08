<template>
  <div>
    <el-dialog v-model="dialogFormVisible" title="create form" @closed="handleCloses">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
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
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['handleCloses', 'closed', 'submitForm', 'change']);
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) dialogFormVisible.value = true;
  }
);
const dialogFormVisible = ref();
const formSize = ref('default');
const ruleFormRef = ref();
const ruleForm = reactive({
  name: '',
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
onMounted(() => {
  // console.log(arr, 888);
});
const submitForm = (ruleFormRef) => {
  // dialogFormVisible.value = false;
  if (!ruleFormRef) return;
  ruleFormRef.validate((valid, fields) => {
    if (valid) {
      console.log('create');
      emit('change', ruleForm);
      dialogFormVisible.value = false;
    } else {
      console.log('not create', fields);
      dialogFormVisible.value = true;
    }
  });
  console.log(ruleForm);
};
const resetForm = () => {
  console.log(1);
  dialogFormVisible.value = false;
  ruleForm.name = '';
  ruleForm.state = null;
  ruleForm.date = '';
  ruleForm.city = '';
  ruleForm.address = '';
};
const handleCloses = () => {
  dialogFormVisible.value = false;
  ruleForm.name = '';
  ruleForm.state = null;
  ruleForm.date = '';
  ruleForm.city = '';
  ruleForm.address = '';
  emit('closed');
};
</script>

<style></style>
