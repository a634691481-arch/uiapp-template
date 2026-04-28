<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <view class="flex-col gap-3 p-3">
      <view class="flex flex-col gap-4 p-3 bg-white rounded-lg">
        <view class="text-sm font-medium text-gray-900">隐私政策</view>
        <view class="text-xs leading-relaxed text-gray-600">
          <view class="mb-2 font-medium">一、总则</view>
          <view class="mb-3">
            我们非常重视您的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。请您在使用我们的服务前仔细阅读本政策。
          </view>

          <view class="mb-2 font-medium">二、信息收集</view>
          <view class="mb-3">
            我们可能收集的信息包括：您的姓名、手机号码、身份证号、位置信息、设备信息、浏览记录、订单信息等。这些信息将用于为您提供更好的服务体验。
          </view>

          <view class="mb-2 font-medium">三、信息使用</view>
          <view class="mb-3">
            我们使用您的个人信息主要用于：提供产品和服务、处理订单、发送通知、改进用户体验、防止欺诈等。未经您的同意，我们不会将您的个人信息用于其他目的。
          </view>

          <view class="mb-2 font-medium">四、信息共享</view>
          <view class="mb-3">
            我们不会向第三方出售您的个人信息。仅在以下情况下可能共享：获得您的明确同意、与合作伙伴共同提供服务、法律法规要求等。
          </view>

          <view class="mb-2 font-medium">五、信息保护</view>
          <view class="mb-3">
            我们采取多种安全措施保护您的个人信息，包括加密存储、访问控制、安全审计等。但请注意，互联网传输无法保证绝对安全。
          </view>

          <view class="mb-2 font-medium">六、用户权利</view>
          <view class="mb-3">
            您有权访问、更正、删除您的个人信息，有权撤回同意，有权注销账户。您可以通过应用内的设置或联系客服行使这些权利。
          </view>

          <view class="mb-2 font-medium">七、未成年人保护</view>
          <view class="mb-3">
            我们非常重视未成年人的个人信息保护。如果您是未成年人，请在监护人的同意和指导下使用我们的服务。
          </view>

          <view class="mb-2 font-medium">八、政策更新</view>
          <view class="mb-3">
            我们可能会不时更新本隐私政策。更新后的政策将在应用内公布，重大变更将通过适当方式通知您。
          </view>

          <view class="mb-2 font-medium">九、联系我们</view>
          <view class="mb-3">
            如果您对本隐私政策有任何疑问，请联系我们的客服团队。客服电话：400-888-8888，服务时间：9:00-21:00。
          </view>

          <view class="mt-2 text-gray-400">最后更新日期：2024年1月15日</view>
        </view>
      </view>
    </view>
  </yy-paging>
</template>

<script setup>
  const pagingConfig = ref({
    auto: false,
    refresherEnabled: true,
    showRefresherWhenReload: true,
    showTabbar: false,
    hideNav: false,
    showNavBack: true,
    navTitle: '隐私政策',
    // navBackground: '',
    color: uni.$u.color.primary,
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
    await new Promise(resolve => setTimeout(resolve, 100))
    paging.value?.complete([1])
  }
</script>

<style lang="scss" scoped></style>
