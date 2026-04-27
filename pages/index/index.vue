<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="flex-col gap-3 p-3">
      ///
      <view class="">55555 {{ $u.color.primary }}</view>

      <view class="bg-[var(--u-type-primary)]">/////</view>
      <view class="titlee">titleetitleetitlee</view>
      <view class="title">titleetitleetitleetitlee</view>
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
    navTitle: '我的',
    // navBackground: '',
  })
 
  const state = ref({
    isScroll: false,
    dataList: [],
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

<style lang="scss" scoped>
  .title {
    // color: $u-type-primary;
    /* 或使�css 变量 */
    color: var(--u-type-primary);
  }

  .titlee {
    color: $u-type-primary;
    /* 或使�css 变量 */
    // color: var(--u-type-primary);
  }
</style>
