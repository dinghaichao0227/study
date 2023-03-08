<template>
  <div>
    <el-dialog v-model="dialogFormVisible" title="edit form" @closed="handleCloses">
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
          <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
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
  form: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['handleCloses', 'closed', 'submitForm']);
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) dialogFormVisible.value = true;
  }
);
watch(
  () => props.form,
  (newValue) => {
    if (newValue) {
      ruleForm = newValue;
    }
  }
);
const dialogFormVisible = ref();
const formSize = ref('default');
const ruleFormRef = ref();
var ruleForm = reactive({
  name: '',
  date: '',
});
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' },
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
  // console.log(props.visible);
});
const submitForm = () => {
  dialogFormVisible.value = false;
};
// const resetForm = () => {
//   console.log(1);
//   dialogFormVisible.value = false;
// };
const handleCloses = () => {
  dialogFormVisible.value = false;
  emit('closed');
};
// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))
</script>

<style></style>
