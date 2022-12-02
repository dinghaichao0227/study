<template>
  <div>
    <teleport to="body">
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
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity time" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  v-model="ruleForm.date1"
                  type="date"
                  label="Pick a date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col class="text-center" :span="2">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  v-model="ruleForm.date2"
                  label="Pick a time"
                  placeholder="Pick a time"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </teleport>
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
const emit = defineEmits(['handleCloses', 'closed']);
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
  date1: '',
  date2: '',
});
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
});
onMounted(() => {
  // console.log(props.visible);
});
const submitForm = () => {
  dialogFormVisible.value = false;

  console.log(1);
};
const resetForm = () => {
  console.log(1);
  dialogFormVisible.value = false;
};
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
