<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <template #top>
      <view class="flex flex-col gap-2 p-3 pb-0 bg-white">
        <u-search v-model="state.keyword" placeholder="搜索" :show-action="false" @search="onSearch"></u-search>
        <u-subsection
          :list="state.categoryList"
          :current="state.currentCategory"
          @change="onCategoryChange"
          active-color="var(--u-type-primary)"
        ></u-subsection>
      </view>
      <u-tabs :list="state.tabList" :is-scroll="false" :current="state.currentTab" @change="onTabChange"></u-tabs>
    </template>
    <view class="flex flex-col gap-3 p-3">
      <view
        class="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm"
        v-for="(item, index) in state.dataList"
        :key="index"
      >
        <view class="flex items-center justify-between p-3 border-b border-gray-100">
          <view class="text-xs text-gray-400">{{ item.orderNo }}</view>
          <u-tag :text="item.statusText" :type="item.statusType" size="mini"></u-tag>
        </view>
        <view class="flex gap-3 p-3">
          <view class="size-20 bg-slate-200 flex-shrink-0 overflow-hidden rounded-lg">
            <u-image src="https://picsum.photos/200/300" class="!size-20"></u-image>
          </view>
          <view class="flex flex-col justify-between flex-1">
            <view class="text-sm text-gray-900">{{ item.title }}</view>
            <view class="mt-1 text-xs text-gray-400">{{ item.time }}</view>
            <view class="flex items-center justify-between mt-2">
              <view class="text-sm font-medium text-gray-900">¥{{ item.price }}</view>
              <view class="text-xs text-gray-400">x{{ item.count }}</view>
            </view>
          </view>
        </view>
        <view class="flex items-center justify-between p-3 border-t border-gray-100">
          <view class="text-xs text-gray-400">
            共{{ item.count }}件 合计：
            <text class="text-sm font-medium text-gray-900">¥{{ item.total }}</text>
          </view>
          <view class="flex gap-2">
            <u-button v-if="item.status === 'unpaid'" type="primary" size="mini">去支付</u-button>
            <u-button v-if="item.status === 'unused'" type="primary" plain size="mini">去使用</u-button>
            <u-button size="mini">查看详情</u-button>
          </view>
        </view>
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
    navTitle: '我的演艺',
    color: uni.$u.color.primary,
  })

  const state = ref({
    isScroll: false,
    keyword: '',
    dataList: [],
    categoryList: [{ name: '演艺' }, { name: '年卡' }, { name: '旅居卡' }],
    currentCategory: 0,
    tabList: [{ name: '全部' }, { name: '待支付' }, { name: '待使用' }, { name: '已完成' }, { name: '退款' }],
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

  function onCategoryChange(index) {
    state.value.currentCategory = index
    paging.value?.reload()
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

    const category = ['perform', 'year', 'travel'][state.value.currentCategory]
    const status = ['all', 'unpaid', 'unused', 'completed', 'refund'][state.value.currentTab]

    const mockData = {
      perform: {
        all: [
          {
            orderNo: '20240115001',
            title: '《长恨歌》实景演出',
            time: '2024-02-10 20:00',
            price: 298,
            count: 2,
            total: 596,
            status: 'unpaid',
            statusText: '待支付',
            statusType: 'warning',
          },
          {
            orderNo: '20240114002',
            title: '《印象刘三姐》',
            time: '2024-02-08 19:30',
            price: 198,
            count: 1,
            total: 198,
            status: 'unused',
            statusText: '待使用',
            statusType: 'primary',
          },
        ],
        unpaid: [
          {
            orderNo: '20240115001',
            title: '《长恨歌》实景演出',
            time: '2024-02-10 20:00',
            price: 298,
            count: 2,
            total: 596,
            status: 'unpaid',
            statusText: '待支付',
            statusType: 'warning',
          },
        ],
        unused: [
          {
            orderNo: '20240114002',
            title: '《印象刘三姐》',
            time: '2024-02-08 19:30',
            price: 198,
            count: 1,
            total: 198,
            status: 'unused',
            statusText: '待使用',
            statusType: 'primary',
          },
        ],
        completed: [
          {
            orderNo: '20240110003',
            title: '《千古情》',
            time: '2024-01-20 14:00',
            price: 280,
            count: 2,
            total: 560,
            status: 'completed',
            statusText: '已完成',
            statusType: 'success',
          },
        ],
        refund: [
          {
            orderNo: '20240105004',
            title: '《丝路花雨》',
            time: '2024-01-15 19:30',
            price: 180,
            count: 1,
            total: 180,
            status: 'refund',
            statusText: '退款中',
            statusType: 'error',
          },
        ],
      },
      year: {
        all: [
          {
            orderNo: '20240113001',
            title: '2024畅游年卡',
            time: '2024-01-13',
            price: 365,
            count: 1,
            total: 365,
            status: 'unused',
            statusText: '待使用',
            statusType: 'primary',
          },
        ],
        unpaid: [],
        unused: [
          {
            orderNo: '20240113001',
            title: '2024畅游年卡',
            time: '2024-01-13',
            price: 365,
            count: 1,
            total: 365,
            status: 'unused',
            statusText: '待使用',
            statusType: 'primary',
          },
        ],
        completed: [],
        refund: [],
      },
      travel: {
        all: [
          {
            orderNo: '20240112001',
            title: '海南旅居卡（30天）',
            time: '2024-03-01',
            price: 2999,
            count: 1,
            total: 2999,
            status: 'unpaid',
            statusText: '待支付',
            statusType: 'warning',
          },
        ],
        unpaid: [
          {
            orderNo: '20240112001',
            title: '海南旅居卡（30天）',
            time: '2024-03-01',
            price: 2999,
            count: 1,
            total: 2999,
            status: 'unpaid',
            statusText: '待支付',
            statusType: 'warning',
          },
        ],
        unused: [],
        completed: [],
        refund: [],
      },
    }

    const list = mockData[category]?.[status] || []
    paging.value?.complete(list)
  }
</script>

<style lang="scss" scoped></style>
