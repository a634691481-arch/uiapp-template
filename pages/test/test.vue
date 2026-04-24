<template>
  <view>
    <yy-paging
      v-model="state.dataList"
      @query="queryList"
      ref="paging"
      :auto="false"
      @scroll="scroll"
      :refresher-enabled="true"
      :showRefresherWhenReload="true"
    >
      <template #top>
        <u-navbar
          :background="{ backgroundColor: state.isScroll ? '#fff' : '#fff' }"
          :title="state.title"
          :border-bottom="false"
          title-color="#000"
          :isBack="false"
          backIconColor="#000"
        ></u-navbar>
      </template>
      <template #empty>
        <yy-empty></yy-empty>
      </template>
      <template #loadingMoreNoMore>
        <yy-nomore></yy-nomore>
      </template>
      <template #bottom></template>
      <view class="flex flex-col px-3"></view>
    </yy-paging>
  </view>
</template>

<script setup>
  const state = ref({
    isScroll: false,
    dataList: [],
    title: '页面标题',
  })

  const paging = ref()

  onLoad(options => {
    console.log('🚀 页面加载:', options)
  })

  onShow(options => {
    console.log('🚀 页面加载:', options)
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
