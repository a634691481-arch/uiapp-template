<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="bg-gray-50 flex flex-col min-h-screen gap-3 p-3">
      <!-- 用户信息 -->
      <view class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
        <view class="size-12 bg-slate-200 rounded-full"></view>
        <view class="flex flex-col">
          <view class="text-base font-medium text-gray-900">昵称</view>
          <view class="text-xs text-gray-400 mt-0.5">账号: 18599996666</view>
        </view>
      </view>

      <!-- 快捷核销 -->
      <view class="flex gap-3 p-3 bg-white rounded-lg shadow-sm">
        <u-button type="primary" plain size="small" class="flex-1">核销</u-button>
        <u-button type="primary" plain size="small" class="flex-1">票根码核销</u-button>
      </view>

      <!-- 金刚区 -->
      <view class="grid grid-cols-4 py-3 bg-white rounded-lg shadow-sm">
        <view class="flex flex-col items-center justify-center gap-1" v-for="item in state.kingKongList" :key="item.name">
          <view class="size-7 bg-slate-400 rounded-full"></view>
          <view class="text-xs text-gray-600">{{ item.name }}</view>
        </view>
      </view>

      <!-- 我的订单 -->
      <view class="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm">
        <view class="flex items-center justify-between p-3 border-b border-gray-100">
          <view class="text-sm font-medium text-gray-900">我的订单</view>
          <view class="flex items-center text-xs text-gray-400">
            全部
            <u-icon name="arrow-right" size="22" class="ml-0.5"></u-icon>
          </view>
        </view>
        <view class="grid grid-cols-4 py-3">
          <view class="flex flex-col items-center justify-center gap-1" v-for="item in state.order" :key="item.name">
            <view class="size-7 bg-slate-400 rounded-full"></view>
            <view class="text-xs text-gray-600">{{ item.name }}</view>
          </view>
        </view>
      </view>

      <!-- 功能列表 -->
      <view class="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm">
        <view
          class="last:border-b-0 active:bg-gray-50 flex items-center justify-between px-3 py-3 transition-colors border-b border-gray-100"
          v-for="(i, k) in state.list"
          :key="k"
        >
          <view class="flex items-center gap-2">
            <view class="size-5 bg-slate-300 rounded-sm"></view>
            <view class="text-sm text-gray-700">{{ i.name }}</view>
          </view>
          <u-icon name="arrow-right" size="22" color="#ccc"></u-icon>
        </view>
      </view>

      <!--  -->
    </view>
  </yy-paging>
</template>

<script setup>
  import { ref } from 'vue'

  const pagingConfig = ref({
    auto: false,
    refresherEnabled: true,
    showRefresherWhenReload: true,
    showTabbar: true,
    hideNav: false,
    showNavBack: true,
    navTitle: '我的',
  })

  const state = ref({
    isScroll: false,
    dataList: [],
    avatarUrl: '',
    kingKongList: [
      {
        name: '优惠券',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '我的年卡',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '我的预约',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '我的演艺',
        icon: '/static/images/my/coupon.png',
      },
    ],

    order: [
      {
        name: '待支付',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '待使用',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '退款',
        icon: '/static/images/my/coupon.png',
      },
      {
        name: '售后/退换',
        icon: '/static/images/my/coupon.png',
      },
    ],
    list: [
      { name: '一键定制', icon: '/static/images/my/coupon.png' },
      { name: '青年权益卡', icon: '/static/images/my/coupon.png' },
      { name: '发票中心', icon: '/static/images/my/coupon.png' },
      { name: '我的投诉', icon: '/static/images/my/coupon.png' },
      { name: '中奖记录', icon: '/static/images/my/coupon.png' },
      { name: '我的收藏', icon: '/static/images/my/coupon.png' },
      { name: '我的消息', icon: '/static/images/my/coupon.png' },
      { name: '出行人信息', icon: '/static/images/my/coupon.png' },
      { name: '隐私政策简要版', icon: '/static/images/my/coupon.png' },
      { name: '个人信息收集清单', icon: '/static/images/my/coupon.png' },
      { name: '应用权限说明', icon: '/static/images/my/coupon.png' },
      { name: '我要分销', icon: '/static/images/my/coupon.png' },
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

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
