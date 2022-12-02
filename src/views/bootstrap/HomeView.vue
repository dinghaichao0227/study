<template>
  <div class="about">
    <h1>This is ToDoList</h1>
    <div class="about-box">
      <div class="todoList">
        <input type="text" v-model="state.list" placeholder="输入目标" />
        <Button class="btn" @click="OnSubmit1">提交</Button>
      </div>
      <div class="loading">
        <h3>进行时:</h3>
        <ul>
          <li v-for="(item, id) in state.item" :key="id" @click="OnSubmit2(item, id)">{{ id + 1 + ',' }} {{ item }}</li>
        </ul>
      </div>
      <div class="reslve">
        <h3>已完成:</h3>
        <ul>
          <li v-for="(text, id) in state.text" :key="id" @click="OnSubmit3(text, id)">{{ id + 1 + ',' }} {{ text }}</li>
        </ul>
      </div>
    </div>
    <h2>{{ state.name }}</h2>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  setup() {
    const state = reactive({
      list: '',
      item: ['学习Vue', '看小张', '懂的思考'],
      text: [],
    });
    const OnSubmit1 = () => {
      state.list === '' ? (state.itme = []) : state.item.push(state.list);
      state.list = '';
      const arr = new Set(state.item);
      state.item = [...arr];
    };
    const OnSubmit2 = (item, id) => {
      state.text.push(item);
      console.log(state.item.splice(id, 1));
    };
    const OnSubmit3 = (text, id) => {
      console.log(text);
      console.log(id);
      console.log(state.text.splice(id, 1));
    };
    return {
      state,
      OnSubmit1,
      OnSubmit2,
      OnSubmit3,
    };
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-box {
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    .todoList {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loading,
    .reslve {
      width: 350px;
    }
  }
  ul li {
    list-style: none;
  }
  .btn {
    height: 22px;
    margin-left: 10px;
  }
}
</style>
