<template>
  <div class="box">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm-6 col-lg-4">
          <div class="left">left</div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="center">center</div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="right">right</div>
        </div>
      </div>
    </div>
    <div class="blue red">text</div>
    <p>{{ a }}</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
var a = null;
const promise = new Promise((reverse, rejects) => {
  const i = 2;
  if (i === 2) {
    reverse((a = i));
  } else
    (e) => {
      rejects(e);
    };
  return {
    promise,
  };
});
onMounted(() => {
  var i = 0;
  for (i = 1; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    });
  }
});
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
}
.blue {
  color: blue;
}
.red {
  color: red;
}

.row {
  margin: auto;
}

.col-sm-6,
.col-log-4 {
  width: 370px;
  height: 200px;
  background-color: aqua;
  border: 1px solid;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.left,
.center,
.right {
}
</style>
