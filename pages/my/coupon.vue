<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <template #top>
      <view class="p-3 pb-0 bg-white">
        <u-search v-model="state.keyword" placeholder="搜索优惠券" :show-action="false" @search="onSearch"></u-search>
      </view>
      <u-tabs :list="state.tabList" :is-scroll="false" :current="state.currentTab" @change="onTabChange"></u-tabs>
    </template>
    <view class="flex flex-col gap-3 p-3">
      <view
        class="relative flex overflow-hidden bg-white rounded-lg shadow-sm"
        v-for="(item, index) in state.dataList"
        :key="index"
      >
        <!-- <view class="absolute top-0 right-0">
          <u-tag :text="item.statusText" :type="item.statusType" size="mini"></u-tag>
        </view> -->
        <!-- 左侧色带 -->
        <view class="flex-shrink-0 w-2" :class="item.status === 'unused' ? 'bg-red-500' : 'bg-gray-300'"></view>
        <view class="flex items-center flex-1 gap-3 p-3">
          <view class="flex flex-col items-center justify-center flex-shrink-0 w-20">
            <view class="text-2xl font-bold" :class="item.status === 'unused' ? 'text-red-500' : 'text-gray-400'">
              <text class="text-sm">¥</text>
              {{ item.amount }}
            </view>
            <view class="text-xs text-gray-400">{{ item.condition }}</view>
          </view>
          <view class="flex flex-col justify-center flex-1 gap-1">
            <view class="text-sm font-medium text-gray-900">{{ item.name }}</view>
            <view class="text-xs text-gray-400">有效期至 {{ item.expireDate }}</view>
            <view class="text-xs text-gray-400">{{ item.scope }}</view>
          </view>
          <view class="flex flex-col items-center justify-center flex-shrink-0 gap-2">
            <!-- -->
            <u-button v-if="item.status === 'unused'" size="mini" type="primary">去使用</u-button>
          </view>
        </view>
        <!-- 圆角缺口装饰 -->
        <view
          class="left-24 absolute top-0 bottom-0 w-1 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full"
          style="top: 50%"
        ></view>
      </view>
    </view>
  </yy-paging>
</template>

<script setup>
  const pagingConfig = ref({
    auto: true,
    refresherEnabled: true,
    showRefresherWhenReload: true,
    showTabbar: false,
    hideNav: false,
    showNavBack: true,
    navTitle: '我的优惠券',
    color: uni.$u.color.primary,
  })

  const state = ref({
    isScroll: false,
    keyword: '',
    dataList: [],
    tabList: [{ name: '未使用' }, { name: '已使用' }, { name: '已过期' }],
    currentTab: 0,
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

  function onTabChange(index) {
    state.value.currentTab = index
    paging.value?.reload()
  }

  function onSearch() {
    paging.value?.reload()
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 100))

    const status = ['unused', 'used', 'expired'][state.value.currentTab]

    const mockData = {
      unused: [
        {
          name: '新用户专享券',
          amount: 50,
          condition: '满200可用',
          expireDate: '2024-02-15',
          scope: '全品类可用',
          status: 'unused',
          statusText: '未使用',
          statusType: 'error',
        },
        {
          name: '景点门票券',
          amount: 20,
          condition: '满100可用',
          expireDate: '2024-02-10',
          scope: '景点门票专享',
          status: 'unused',
          statusText: '未使用',
          statusType: 'error',
        },
        {
          name: '酒店住宿券',
          amount: 100,
          condition: '满500可用',
          expireDate: '2024-01-30',
          scope: '酒店住宿专享',
          status: 'unused',
          statusText: '未使用',
          statusType: 'error',
        },
      ],
      used: [
        {
          name: '春节特惠券',
          amount: 30,
          condition: '满150可用',
          expireDate: '2024-01-20',
          scope: '全品类可用',
          status: 'used',
          statusText: '已使用',
          statusType: 'info',
        },
        {
          name: '美食代金券',
          amount: 15,
          condition: '满50可用',
          expireDate: '2024-01-15',
          scope: '美食专享',
          status: 'used',
          statusText: '已使用',
          statusType: 'info',
        },
      ],
      expired: [
        {
          name: '周年庆券',
          amount: 88,
          condition: '满300可用',
          expireDate: '2024-01-01',
          scope: '全品类可用',
          status: 'expired',
          statusText: '已过期',
          statusType: 'info',
        },
        {
          name: '国庆狂欢券',
          amount: 66,
          condition: '满200可用',
          expireDate: '2023-10-07',
          scope: '全品类可用',
          status: 'expired',
          statusText: '已过期',
          statusType: 'info',
        },
      ],
    }

    paging.value?.complete(mockData[status] || [])
  }
</script>

<style lang="scss" scoped></style>
