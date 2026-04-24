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
      <view class="flex flex-col px-3">
        <i-camera></i-camera>
        <i-camera theme="outline" />
        <i-camera theme="outline" fill="#2F88FF" />
        <i-camera theme="filled" fill="#333" />
        <i-camera theme="multi-color" :fill="['#333', '#2F88FF', '#FFF', '#43CCF8']" />
        <i-camera theme="multi-color" :fill="['#333', '#2F88FF', '#FFF', '#43CCF8']" size="40" />
        <i-camera :strokeWidth="1"></i-camera>
        <i-camera :strokeWidth="2"></i-camera>
        <i-camera :strokeWidth="3"></i-camera>
        <i-camera :strokeWidth="4"></i-camera>
        <i-camera :size="20"></i-camera>
        <i-camera size="20"></i-camera>
        <i-camera size="20px"></i-camera>
        <i-camera size="40rpx"></i-camera>
        <i-camera size="2em"></i-camera>
        <i-camera strokeLinejoin="round" />
        <i-camera strokeLinejoin="miter" />
        <i-camera strokeLinejoin="bevel" />
      </view>
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
