<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="inline-flex flex-col gap-3 p-3">
      <u-button type="primary" :color="$u.color.primary">提交</u-button>
      <u-button type="primary" :color="$u.color.primary">提交</u-button>
      <u-button type="primary" :color="$u.color.primary">提交</u-button>
      <u-icon name="chat" size="40" color="var(--u-type-primary)" />

      <view class="text-xl font-bold text-[var(--u-type-primary)]">555555555555555</view>
    </view>
  </yy-paging>
</template>

<script setup>
  const pagingConfig = ref({
    auto: false,
    refresherEnabled: true,
    showRefresherWhenReload: true,
    showTabbar: true,
    hideNav: false,
    showNavBack: true,
    navTitle: '页面标题',
  })

  const state = ref({
    isScroll: false,
    dataList: [],
  })

  const paging = ref()

  onLoad(options => {
    console.log('🚀 页面加载:', options)
    console.log('res==> ', uni.$u.getColor('primary'))
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
