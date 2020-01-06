<template>
  <div>
      <h1>我是second组件</h1>
      <p>{{$store.state.count}}</p>
      <button @click="$store.commit('add',1)">增加</button><br/>
      <button @click="$store.dispatch('asyncAdd')">延迟增加</button>

     <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
     <van-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template slot="title">
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <van-icon
    slot="right-icon"
    name="search"
    style="line-height: inherit;"
  />
</van-cell>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
