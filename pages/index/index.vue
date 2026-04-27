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
        <!-- 色板展示 -->
        <view class="p-3 rounded-lg" style="background: var(--bg-color-grey)">
          <text class="block mb-3 text-sm font-medium" style="color: var(--text-color)">主题色板</text>
          <view class="grid grid-cols-5 gap-2">
            <view class="flex flex-col items-center gap-1">
              <view class="w-10 h-10 rounded-lg" style="background: var(--color-primary)"></view>
              <text class="text-xs" style="color: var(--text-color-grey)">主色</text>
            </view>
            <view class="flex flex-col items-center gap-1">
              <view class="w-10 h-10 rounded-lg" style="background: var(--color-success)"></view>
              <text class="text-xs" style="color: var(--text-color-grey)">成功</text>
            </view>
            <view class="flex flex-col items-center gap-1">
              <view class="w-10 h-10 rounded-lg" style="background: var(--color-warning)"></view>
              <text class="text-xs" style="color: var(--text-color-grey)">警告</text>
            </view>
            <view class="flex flex-col items-center gap-1">
              <view class="w-10 h-10 rounded-lg" style="background: var(--color-error)"></view>
              <text class="text-xs" style="color: var(--text-color-grey)">错误</text>
            </view>
            <view class="flex flex-col items-center gap-1">
              <view class="w-10 h-10 rounded-lg" style="background: var(--color-info)"></view>
              <text class="text-xs" style="color: var(--text-color-grey)">信息</text>
            </view>
          </view>
        </view>

        <!-- 使用方式示例 -->
        <view class="p-3 rounded-lg" style="background: var(--bg-color-grey)">
          <text class="block mb-3 text-sm font-medium" style="color: var(--text-color)">使用方式示例</text>
          <view class="flex flex-col gap-2">
            <!-- CSS 变量 -->
            <view class="px-3 py-2 text-sm text-center text-white rounded-md" style="background: var(--color-primary)">
              CSS 变量: background: var(--color-primary)
            </view>
            <!-- Tailwind 类 -->
            <view class="bg-primary px-3 py-2 text-sm text-center text-white rounded-md">Tailwind: class="bg-primary"</view>
            <!-- SCSS 变量 -->
            <view class="scss-primary px-3 py-2 text-sm text-center text-white rounded-md">SCSS 变量: background: $uni-color-primary</view>
          </view>
        </view>

        <!-- uView 组件示例 -->
        <view class="p-3 rounded-lg" style="background: var(--bg-color-grey)">
          <text class="block mb-3 text-sm font-medium" style="color: var(--text-color)">uView 组件</text>
          <u-button type="primary" size="medium" :ripple="true">primary 按钮</u-button>
          <view class="flex gap-2 mt-2">
            <u-button type="success" size="mini">成功</u-button>
            <u-button type="warning" size="mini">警告</u-button>
            <u-button type="error" size="mini">错误</u-button>
          </view>
          <u-radio-group v-model="state.formData.gender" :active-color="primaryColor" class="flex gap-6">
            <u-radio name="男">男</u-radio>
            <u-radio name="女">女</u-radio>
          </u-radio-group>
        </view>
        <u-tag text="标签文字" type="primary" mode="dark" class="!rounded-full" size="default" />
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

  // 主题主色（供 uView 组件属性使用）
  const primaryColor = 'var(--color-primary)'
  console.log('🚀 ~ :106 ~ primaryColor:', primaryColor)

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
    await new Promise(resolve => setTimeout(resolve, 500))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped>
  @import '@/common/css/theme.scss';

  .scss-primary {
    background: $uni-color-primary;
  }
</style>
