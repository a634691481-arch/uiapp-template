<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="flex flex-col gap-3 p-3 pb-20">
      <view
        class="flex flex-col overflow-hidden bg-white rounded-lg shadow-sm"
        v-for="(item, index) in state.dataList"
        :key="index"
      >
        <view class="flex items-center justify-between p-3 border-b border-gray-100">
          <view class="flex items-center gap-2">
            <view class="text-sm font-medium text-gray-900">{{ item.name }}</view>
            <u-tag v-if="item.isDefault" text="默认" type="primary" size="mini"></u-tag>
            <u-tag :text="item.type" type="info" size="mini"></u-tag>
          </view>
          <view class="flex items-center gap-3">
            <zero-icon name="ri:edit-line" size="20" :color="pagingConfig.color" @click="editTraveler(item)"></zero-icon>
            <zero-icon name="ri:delete-bin-line" size="20" color="#ef4444" @click="deleteTraveler(item)"></zero-icon>
          </view>
        </view>
        <view class="flex flex-col gap-1 p-3">
          <view class="text-xs text-gray-500">{{ item.idType }}：{{ item.idNo }}</view>
          <view class="text-xs text-gray-500">手机号：{{ item.phone }}</view>
        </view>
      </view>
    </view>

    <!-- 底部固定按钮 -->
  </yy-paging>

  <view class="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-100">
    <u-button type="primary" @click="addTraveler">新增出行人信息</u-button>
  </view>
</template>

<script setup>
  const pagingConfig = ref({
    auto: true,
    refresherEnabled: true,
    showRefresherWhenReload: true,
    showTabbar: false,
    hideNav: false,
    showNavBack: true,
    navTitle: '出行人信息',
    color: uni.$u.color.primary,
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
    console.log('🚀 页面显示:', options)
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  function addTraveler() {
    uni.showToast({ title: '新增出行人', icon: 'none' })
  }

  function editTraveler(item) {
    uni.showToast({ title: '编辑：' + item.name, icon: 'none' })
  }

  function deleteTraveler(item) {
    uni.showModal({
      title: '提示',
      content: '确定删除该出行人信息吗？',
      success: res => {
        if (res.confirm) {
          uni.showToast({ title: '已删除', icon: 'success' })
        }
      },
    })
  }

  async function queryList(page, limit) {
    await new Promise(resolve => setTimeout(resolve, 100))

    const mockData = [
      { name: '张三', type: '成人', idType: '身份证', idNo: '11010119900101****', phone: '138****8888', isDefault: true },
      {
        name: '李四',
        type: '成人',
        idType: '身份证',
        idNo: '11010119950202****',
        phone: '139****9999',
        isDefault: false,
      },
      {
        name: '张小明',
        type: '儿童',
        idType: '户口本',
        idNo: '11010120200101****',
        phone: '138****8888',
        isDefault: false,
      },
    ]

    paging.value?.complete(mockData)
  }
</script>

<style lang="scss" scoped></style>
