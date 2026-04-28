<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="flex flex-col gap-3 p-3">
      <view class="flex flex-col gap-3 p-3 bg-white rounded-lg">
        <view class="text-sm font-medium text-gray-900">个人信息收集清单</view>
        <view class="text-xs text-gray-500">以下是我们收集的个人信息类型及用途说明，便于您了解和管理您的个人信息。</view>

        <view class="flex flex-col gap-2 mt-1">
          <view
            class="flex flex-col gap-1 p-2 rounded-md bg-slate-50"
            v-for="(item, index) in state.infoList"
            :key="index"
          >
            <view class="flex items-center justify-between">
              <view class="text-sm font-medium text-gray-800">{{ item.name }}</view>
              <u-tag :text="item.required ? '必需' : '可选'" :type="item.required ? 'error' : 'info'" size="mini"></u-tag>
            </view>
            <view class="text-xs text-gray-500">用途：{{ item.purpose }}</view>
            <view class="text-xs text-gray-400">场景：{{ item.scene }}</view>
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
    navTitle: '个人信息收集清单',
    // navBackground: '',
    color: uni.$u.color.primary,
  })

  const state = ref({
    isScroll: false,
    dataList: [],
    infoList: [
      { name: '手机号码', required: true, purpose: '账户注册、登录验证、订单通知', scene: '注册/登录/下单' },
      { name: '真实姓名', required: true, purpose: '实名认证、购票入园、保险投保', scene: '实名认证/购票' },
      { name: '身份证号', required: true, purpose: '实名认证、景区验票、交通出行', scene: '实名认证/购票/入住' },
      { name: '头像', required: false, purpose: '个性化展示、社交互动', scene: '个人中心' },
      { name: '位置信息', required: false, purpose: '推荐附近景点、导航服务', scene: '首页/地图' },
      { name: '设备信息', required: false, purpose: '保障账户安全、优化服务体验', scene: '全场景' },
      { name: '订单信息', required: true, purpose: '订单处理、售后服务', scene: '下单/查询' },
      { name: '浏览记录', required: false, purpose: '个性化推荐、兴趣分析', scene: '首页/推荐' },
      { name: '收藏信息', required: false, purpose: '保存用户偏好、提供快捷访问', scene: '收藏功能' },
      { name: '搜索记录', required: false, purpose: '优化搜索结果、历史记录展示', scene: '搜索功能' },
      { name: '支付方式', required: false, purpose: '完成订单支付、退款处理', scene: '支付环节' },
      { name: '联系地址', required: false, purpose: '邮寄特产、发票寄送', scene: '购物/发票' },
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
    await new Promise(resolve => setTimeout(resolve, 100))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
