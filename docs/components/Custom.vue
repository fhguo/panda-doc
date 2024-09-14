<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { ElButton, ElMessage, ElImage } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const { page } = useData()

const count = ref(0)

const open = () => {
  ElMessage('this is a message.')
}

const url = ref('https://www.apple.com.cn/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg')

const srcList = ['https://www.apple.com.cn/iphone-16-pro/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg']
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
  <video controls
    poster="https://www.apple.com.cn/v/iphone-15-pro/c/images/overview/highlights/titanium__dpzwrhj26dm6_large_2x.jpg">
    <source
      src="https://www.apple.com.cn/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4"
      type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <p>测试图片</p>
  <!-- <img src="https://www.apple.com.cn/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg" /> -->
  <el-image :src="url" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" :initial-index="1"
    fit="cover" />
</template>

<style lang="less" scoped>
.contaniner {
  margin-bottom: 20px;

  .button {
    color: red;
    font-weight: bold;
  }

}

.el-image {
  border-radius: 12px;
}
</style>