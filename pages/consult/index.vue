<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <template #top>
      <view class="flex items-center justify-between p-3 bg-white shadow-sm">
        <view class="text-xs text-gray-400">如需帮助，请选择以下咨询方式</view>
        <view>
          <u-button type="primary" plain size="mini" @click="showExplain = true">服务说明</u-button>
        </view>
      </view>
    </template>
    <view class="flex flex-col gap-3 p-3">
      <!-- 功能列表 -->
      <view class="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm">
        <view
          class="last:border-b-0 active:bg-gray-50 flex items-center justify-between px-3 py-3 transition-colors border-b border-gray-100"
          v-for="(item, index) in state.menuList"
          :key="index"
          @click="navigateTo(item)"
        >
          <view class="flex items-center gap-3">
            <view
              class="flex items-center justify-center rounded-lg"
              style="width: 36px; height: 36px; background-color: rgba(var(--u-type-primary-rgb), 0.1)"
            >
              <zero-icon :name="item.icon" size="20" :color="uni.$u.color.primary" />
            </view>
            <view class="text-sm text-gray-700">{{ item.name }}</view>
          </view>
          <u-icon name="arrow-right" size="22" color="#ccc"></u-icon>
        </view>
      </view>
    </view>

    <!-- 服务说明弹窗 -->
    <u-popup v-model="showExplain" mode="center" border-radius="16" width="80%">
      <view class="p-4">
        <view class="text-base font-medium text-center text-gray-900">咨询服务说明</view>
        <view class="flex flex-col gap-1 mt-3 text-sm leading-relaxed text-gray-600">
          <view>1. 广西12345投诉热线：政府官方投诉渠道，处理各类政务投诉</view>
          <view>2. 在线客服：平台专属客服，7×24小时在线解答</view>
          <view>3. 平台热线：400客服电话，服务时间 9:00-21:00</view>
          <view>4. 12345旅游在线投诉：专门针对旅游纠纷的投诉通道</view>
          <view>5. 巩固服务地图：查看附近服务网点及联系方式</view>
        </view>
        <u-button type="primary" class="mt-4" @click="showExplain = false">我知道了</u-button>
      </view>
    </u-popup>
  </yy-paging>
</template>

<script setup>
  const pagingConfig = ref({
    auto: true,
    refresherEnabled: false,
    showRefresherWhenReload: false,
    showTabbar: true,
    hideNav: false,
    showNavBack: true,
    navTitle: '咨询中心',
    color: uni.$u.color.primary,
    loadingMoreNoMoreText: '',
    emptyText: '',
  })

  const showExplain = ref(false)

  const state = ref({
    isScroll: false,
    dataList: [],
    menuList: [
      { name: '广西12345投诉热线', icon: 'ri:phone-line', type: 'phone', value: '12345' },
      { name: '在线客服', icon: 'ri:customer-service-2-line', type: 'page', url: '' },
      { name: '平台热线', icon: 'ri:customer-service-line', type: 'phone', value: '400-888-8888' },
      { name: '12345旅游在线投诉', icon: 'ri:file-list-3-line', type: 'page', url: '' },
      { name: '巩固服务地图', icon: 'ri:map-pin-line', type: 'page', url: '' },
    ],
  })

  const paging = ref()

  onLoad(options => {
    console.log('🚀 页面加载:', options)
  })

  onShow(options => {
    console.log('🚀 页面显示:', options)
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  function navigateTo(item) {
    if (item.type === 'phone') {
      uni.makePhoneCall({ phoneNumber: item.value })
      return
    }
    if (!item.url) {
      uni.showToast({ title: '功能开发中', icon: 'none' })
      return
    }
    vk.navigateTo(item.url)
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
