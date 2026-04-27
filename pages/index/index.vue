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
      <view class="flex flex-col gap-4 px-3 py-4">
        <u-button type="primary">按钮</u-button>
        <u-button type="primary">按钮</u-button>
        <u-button type="primary">按钮</u-button>
        <u-tag text="标签文字" type="primary" mode="dark" class="!rounded-full" size="default" />
        <view class="u-main-color">main-colormain-colormain-color</view>
      </view>
    </yy-paging>
  </view>
</template>

<script setup>
  const state = ref({
    isScroll: false,
    dataList: [],
    title: '主题色示例',
    formData: {
      gender: '',
    },
  })

  const paging = ref()

  onLoad(options => {
    console.log('🚀 页面加载:', options)
    uni.$api.sendSms({ phone: '13800138000' })
  })

  onShow(options => {
    console.log('🚀 页面显示:', options)
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 500))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
