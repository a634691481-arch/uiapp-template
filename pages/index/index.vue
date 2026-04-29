<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <!-- <view class="flex-col gap-3 p-3"></view> -->
    <view class="w-8 bg-red-500" :style="{ height: topHeight + 'px' }">r555</view>
  </yy-paging>
</template>

<script setup>
  const pagingConfig = ref({
    auto: false,
    refresherEnabled: false,
    showRefresherWhenReload: false,
    showTabbar: true,
    hideNav: false,
    showNavBack: true,
    navTitle: '首页',
    // navBackground: '',
    color: uni.$u.color.primary,
    loadingMoreNoMoreText: '',
    emptyText: '',
  })

  const state = ref({
    isScroll: false,
    dataList: [],
  })

  const topHeight = ref(0)

  const paging = ref()

  onLoad(options => {
    console.log('🚀 页面加载:', options)
    const sysInfo = uni.getSystemInfoSync()
    console.log('🚀 ~ :35 ~ sysInfo:', sysInfo)
    const navHeight = (sysInfo.statusBarHeight || 0) + 55
    topHeight.value = sysInfo.windowHeight - navHeight
  })

  onShow(options => {
    console.log('🚀 页面加载:', options)
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 100))
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
