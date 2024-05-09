<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { ElButton, ElMessage, ElCalendar, ElBacktop } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const { page } = useData()

const count = ref(0)
const value = ref(new Date())

const open = () => {
  ElMessage('this is a message.')
}
</script>

<template>
  <p>The count is: {{ count }}</p>
  <p>The page is: {{ page }}</p>
  <div class="contaniner">
    <button class="button" @click="count++">Increment</button>
  </div>

  <el-button type="primary" @click="open" style="margin-bottom: 15px;">我是 ElButton</el-button>
  <p>测试视频</p>
  <!-- <video autoplay="autoplay" src="https://www.w3schools.com/html/movie.mp4"></video> -->
  <video controls poster="https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/007uqo1Vly1hosh6yqj8mj31z418gkau.jpg">
    <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" >
    Your browser does not support the video tag.
  </video>

  <p>测试图片</p>
  <img src="https://image.baidu.com/search/down?url=https://wx4.sinaimg.cn/large/006ufPaEly1ho9agdfjvvj31l32dm4qq.jpg" />

  <el-calendar v-model="value" />
  <el-backtop />
</template>

<style lang="less">
.contaniner {
  margin-bottom: 20px;

  .button {
    color: red !important;
    font-weight: bold;
  }
}
</style>