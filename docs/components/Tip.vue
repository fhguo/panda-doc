<template>
  <div class="tip">
    <p class="custom-block-title">{{ props.title }}</p>
    <ul>
      <!--组件内部遍历数组-->
      <li v-for="(item, index) in props.todos" :key="item.id">
        <!--作用域插槽将数据回传给父组件-->
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  todos: Array
});
</script>

<style lang="less" scoped>
.tip {
  margin: 28px 0;
  padding: 4px 24px 4px 42px;
  border-radius: 8px;
  border: 1px solid var(--vp-tip-border-1);
  overflow-x: auto;
  transition: color 0.5s, background-color 0.5s;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: var(--vp-tip-text-1);
  background-color: var(--vp-tip-1);
  &::before {
    content: "ⓘ";
    position: absolute;
    font-weight: 600;
    font-size: 20px;
    top: 18px;
    left: 17px;
    color: var(--vp-tip-border-1);
  }
  .custom-block-title {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 500;
    color: var(--vp-tip-text-1);
    transition: color 0.5s;
  }
  > ul {
    color: var(--vp-tip-border-1);
  }
}
</style>
