<template>
  <yy-paging v-model="state.dataList" @query="queryList" ref="paging" @scroll="scroll" v-bind="pagingConfig">
    <template #top>
      <view id="top-bar" class="flex flex-col gap-2 p-3">
        <u-search
          bg-color="#fff"
          v-model="state.keyword"
          placeholder="搜索想看的景区"
          :show-action="false"
          @search="handleSearch"
        ></u-search>
        <!-- 筛选栏 -->
        <view class="flex items-center justify-between">
          <view class="text-sm font-medium text-gray-900">全部</view>
          <view class="flex items-center gap-1" @click="showLevelPicker = true">
            <view class="text-xs text-gray-500">景区等级</view>
            <!-- <u-icon name="arrow-down" size="20" color="#999"></u-icon> -->

            <zero-icon size="20" color="#999" name="ri:arrow-down-s-line" v-if="!showLevelPicker"></zero-icon>
            <zero-icon size="20" color="#999" name="ri:arrow-up-s-line" v-else></zero-icon>
          </view>
        </view>
      </view>
    </template>

    <!-- <view :style="{ height: containerHeight }" class="w-5 bg-red-900">3</view> -->
    <view class="flex overflow-hidden" :style="{ height: containerHeight }">
      <!-- 左侧城市列表 -->
      <scroll-view
        scroll-y
        class="bg-gray-50 flex flex-col w-20"
        :style="{ height: containerHeight }"
        :scroll-top="scrollTop"
        scroll-with-animation
      >
        <view
          class="u-tab-item relative flex items-center justify-center px-2 py-3 text-sm transition-colors"
          :class="current === index ? 'bg-white text-gray-900 font-medium' : 'text-gray-500'"
          v-for="(item, index) in state.cityList"
          :key="item"
          @tap.stop="switchMenu(index)"
        >
          <view
            v-if="current === index"
            class="top-1/2 absolute left-0 w-1 h-4 -translate-y-1/2 rounded-r-full"
            :style="{ backgroundColor: uni.$u.color.primary }"
          ></view>
          {{ item }}
        </view>
      </scroll-view>
      <!-- 右侧内容区 -->
      <scroll-view
        scroll-y
        class="*:flex *:flex-col flex-1 *:gap-3 px-3"
        :style="{ height: containerHeight }"
        :scroll-top="scrollRightTop"
        scroll-with-animation
        @scroll="rightScroll"
      >
        <!-- 按城市分组的景区列表  flex flex-col gap-3 pb-3-->
        <view
          class="city-block"
          v-for="(group, cityIndex) in state.groupedData"
          :key="cityIndex"
          :id="'city-block-' + cityIndex"
        >
          <view class="flex flex-col gap-3 pb-3" v-if="group.list.length > 0">
            <view class="flex flex-col gap-3">
              <view
                class="flex gap-3 transition-all"
                :class="{ 'border-2 border-solid rounded-lg p-1': isMatch(item) }"
                :style="isMatch(item) ? { borderColor: uni.$u.color.primary } : {}"
                v-for="(item, index) in group.list"
                :key="index"
              >
                <view class="w-28 h-28 bg-slate-200 relative flex-shrink-0 overflow-hidden rounded-lg">
                  <u-image :src="item.image" class="!size-28" mode="aspectFill" width="100%" height="100%"></u-image>

                  <view
                    class="absolute bottom-0 left-0 px-1.5 py-0.5 text-xs text-white rounded-tr-md"
                    :style="{ backgroundColor: uni.$u.color.primary }"
                  >
                    {{ item.level }}
                  </view>
                </view>
                <view class="flex flex-col justify-between flex-1 py-1">
                  <view class="flex flex-col gap-1">
                    <view class="text-sm font-medium text-gray-900">{{ item.name }}</view>
                    <view class="flex flex-wrap gap-1">
                      <u-tag v-for="tag in item.tags" :key="tag" :text="tag" size="mini" type="primary"></u-tag>
                    </view>
                  </view>
                  <view class="text-xs text-gray-400">{{ item.address }}</view>
                </view>
              </view>
            </view>
          </view>
          <!-- <view class="flex items-center gap-2" :class="cityIndex == 0 ? '' : 'mt-3'">
            <view class="w-1 h-4 rounded-full" :style="{ backgroundColor: uni.$u.color.primary }"></view>
            <view class="text-sm font-medium text-gray-900">{{ group.city }}</view>
          </view> -->
          <!-- <view v-if="group.list.length === 0" class="py-4 text-xs text-center text-gray-400">暂无景区</view> -->
        </view>
      </scroll-view>
    </view>

    <!-- 景区等级筛选弹窗 -->
    <u-popup v-model="showLevelPicker" mode="bottom" border-radius="16" height="40%">
      <view class="flex flex-col h-full">
        <view class="sticky top-0 z-10 flex items-center justify-between p-3 bg-white">
          <view class="text-base font-medium text-gray-900">选择景区等级</view>
          <u-icon name="close" size="24" color="#999" @click="showLevelPicker = false"></u-icon>
        </view>
        <scroll-view scroll-y class="flex flex-col gap-1 p-3">
          <view
            class="active:bg-gray-50 flex items-center justify-between p-3 rounded-md"
            v-for="item in state.levelList"
            :key="item"
            @click="selectLevel(item)"
          >
            <view class="text-sm text-gray-700">{{ item }}</view>
            <zero-icon name="ri:check-line" size="20" :color="uni.$u.color.primary" v-if="state.currentLevel === item" />
          </view>
        </scroll-view>
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
    showNavBack: false,
    navTitle: '旅游中心',
    color: uni.$u.color.primary,
    loadingMoreNoMoreText: '',
    emptyText: '',
    // usePageScroll: true,
  })

  const state = ref({
    isScroll: false,
    keyword: '',
    dataList: [],
    groupedData: [],
    cityList: [
      '南宁市',
      '柳州市',
      '桂林市',
      '梧州市',
      '北海市',
      '防城港市',
      '钦州市',
      '贵港市',
      '玉林市',
      '百色市',
      '贺州市',
      '河池市',
      '来宾市',
      '崇左市',
    ],
    levelList: ['全部等级', '5A景区', '4A景区', '3A景区', '2A景区'],
    currentLevel: '全部等级',
  })

  const paging = ref()
  const showLevelPicker = ref(false)
  const containerHeight = ref('')
  const current = ref(0)
  const scrollTop = ref(0)
  const scrollRightTop = ref(0)
  const oldScrollTop = ref(0)
  const menuHeight = ref(0)
  const menuItemHeight = ref(0)
  const arr = ref([])
  const timer = ref(null)
  const searchKeyword = computed(() => state.value.keyword.trim().toLowerCase())

  const topHeights = ref(0)
  onLoad(options => {
    console.log('🚀 页面加载:', options)
  })

  onShow(options => {
    console.log('🚀 页面显示:', options)
  })

  onReady(() => {
    nextTick(() => {
      calcHeight()
      getMenuItemTop()
    })
  })

  function calcHeight() {
    const query = uni.createSelectorQuery()
    query.select('#top-bar').boundingClientRect()
    query.exec(res => {
      const sysInfo = uni.getSystemInfoSync()
      console.log('🚀 ~ :204 ~ calcHeight ~ sysInfo:', sysInfo)
      const windowHeight = sysInfo.windowHeight

      const topHeight = res[0]?.height || 0
      const statusBarHeight = sysInfo.statusBarHeight || 0
      // iOS 导航栏标准高度 44px，Android 及小程序为 48px
      const navHeight = sysInfo.osName === 'ios' ? 44 : 48
      const tabbarHeight = 50
      // 全面屏设备底部安全区高度（如 iPhone X 的 Home Indicator），非全面屏为 0
      const safeAreaBottom = sysInfo.safeAreaInsets?.bottom
      const faultTolerantPx = 4

      containerHeight.value =
        windowHeight - (topHeight + statusBarHeight + navHeight + tabbarHeight + safeAreaBottom + faultTolerantPx) + 'px'
    })
  }

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  function isMatch(item) {
    if (!searchKeyword.value) return false
    return item.name.toLowerCase().includes(searchKeyword.value)
  }

  function handleSearch() {
    if (!searchKeyword.value) {
      paging.value?.reload()
      return
    }
    const idx = state.value.groupedData.findIndex(group =>
      (group.list || []).some(item => item.name.toLowerCase().includes(searchKeyword.value)),
    )
    if (idx !== -1) {
      switchMenu(idx)
    } else {
      uni.$u.toast('没有找到该景区')
    }
  }

  async function switchMenu(index) {
    if (!state.value.cityList.length) return
    if (arr.value.length === 0) {
      await getMenuItemTop()
    }
    if (index === current.value) return
    scrollRightTop.value = oldScrollTop.value
    await nextTick()
    scrollRightTop.value = arr.value[index] || 0
    current.value = index
    leftMenuStatus(index)
  }

  async function leftMenuStatus(index) {
    current.value = index
    if (menuHeight.value === 0 || menuItemHeight.value === 0) {
      await getElRect('menu-scroll-view', 'menuHeight')
      await getElRect('u-tab-item', 'menuItemHeight')
    }
    scrollTop.value = index * menuItemHeight.value + menuItemHeight.value / 2 - menuHeight.value / 2
  }

  function getElRect(elClass, dataVal) {
    return new Promise(resolve => {
      const query = uni.createSelectorQuery()
      query
        .select('.' + elClass)
        .boundingClientRect(res => {
          const height = Array.isArray(res) ? res[0]?.height : res?.height
          if (typeof height !== 'number') {
            setTimeout(() => getElRect(elClass, dataVal), 10)
            return
          }
          if (dataVal === 'menuHeight') menuHeight.value = height
          if (dataVal === 'menuItemHeight') menuItemHeight.value = height
          resolve()
        })
        .exec()
    })
  }

  function getMenuItemTop() {
    return new Promise(resolve => {
      const query = uni.createSelectorQuery()
      query
        .selectAll('.city-block')
        .boundingClientRect(res => {
          if (!res || !Array.isArray(res) || !res.length) {
            setTimeout(() => getMenuItemTop(), 10)
            return
          }
          arr.value = []
          res.forEach((item, i) => {
            arr.value.push(item.top - res[0].top)
          })
          resolve()
        })
        .exec()
    })
  }

  async function rightScroll(e) {
    oldScrollTop.value = e.detail.scrollTop
    if (arr.value.length === 0) {
      await getMenuItemTop()
    }
    if (timer.value) return
    if (!menuHeight.value) {
      await getElRect('menu-scroll-view', 'menuHeight')
    }
    timer.value = setTimeout(() => {
      timer.value = null
      const scrollHeight = e.detail.scrollTop + menuHeight.value / 2
      for (let i = 0; i < arr.value.length; i++) {
        const height1 = arr.value[i]
        const height2 = arr.value[i + 1]
        if (!height2 || (scrollHeight >= height1 && scrollHeight < height2)) {
          leftMenuStatus(i)
          return
        }
      }
    }, 10)
  }

  function selectLevel(level) {
    state.value.currentLevel = level
    showLevelPicker.value = false
    paging.value?.reload()
  }

  async function queryList(page, limit) {
    // await new Promise(resolve => setTimeout(resolve, 0))

    const mockData = {
      南宁市: [
        {
          name: '青秀山风景区',
          level: '5A景区',
          tags: ['乡村景区', '城市特色', '户外活动'],
          address: '南宁市 青秀区',
          image: 'https://picsum.photos/200/200?random=1',
        },
        {
          name: '南宁动物园',
          level: '4A景区',
          tags: ['动植物园', '亲子', '家庭'],
          address: '南宁市 西乡塘区',
          image: 'https://picsum.photos/200/200?random=2',
        },
        {
          name: '大明山风景旅游区',
          level: '4A景区',
          tags: ['山水游玩'],
          address: '南宁市 武鸣区',
          image: 'https://picsum.photos/200/200?random=3',
        },
        {
          name: '广西药用植物园',
          level: '4A景区',
          tags: ['动植物园', '户外活动', '山水游玩'],
          address: '南宁市 兴宁区',
          image: 'https://picsum.photos/200/200?random=4',
        },
        {
          name: '南宁园博园',
          level: '4A景区',
          tags: ['城市特色', '动植物园'],
          address: '南宁市 邕宁区',
          image: 'https://picsum.photos/200/200?random=5',
        },
      ],
      柳州市: [
        {
          name: '柳州龙潭公园',
          level: '4A景区',
          tags: ['山水游玩', '城市特色'],
          address: '柳州市 鱼峰区',
          image: 'https://picsum.photos/200/200?random=6',
        },
        {
          name: '柳侯公园',
          level: '4A景区',
          tags: ['历史文化', '城市特色'],
          address: '柳州市 城中区',
          image: 'https://picsum.photos/200/200?random=7',
        },
      ],
      桂林市: [
        {
          name: '漓江风景区',
          level: '5A景区',
          tags: ['山水游玩', '自然风光'],
          address: '桂林市 阳朔县',
          image: 'https://picsum.photos/200/200?random=8',
        },
        {
          name: '象山景区',
          level: '4A景区',
          tags: ['山水游玩', '城市特色'],
          address: '桂林市 象山区',
          image: 'https://picsum.photos/200/200?random=9',
        },
        {
          name: '龙脊梯田',
          level: '4A景区',
          tags: ['乡村景区', '摄影'],
          address: '桂林市 龙胜县',
          image: 'https://picsum.photos/200/200?random=10',
        },
      ],
      梧州市: [
        {
          name: '骑楼城',
          level: '4A景区',
          tags: ['历史文化', '城市特色'],
          address: '梧州市 万秀区',
          image: 'https://picsum.photos/200/200?random=11',
        },
      ],
      北海市: [
        {
          name: '银滩旅游区',
          level: '4A景区',
          tags: ['海滨度假', '沙滩'],
          address: '北海市 银海区',
          image: 'https://picsum.photos/200/200?random=12',
        },
        {
          name: '涠洲岛',
          level: '4A景区',
          tags: ['海岛', '自然风光'],
          address: '北海市 海城区',
          image: 'https://picsum.photos/200/200?random=13',
        },
      ],
    }

    const grouped = []
    state.value.cityList.forEach(city => {
      let list = mockData[city] || []
      if (state.value.currentLevel !== '全部等级') {
        list = list.filter(item => item.level === state.value.currentLevel)
      }
      grouped.push({ city, list })
    })
    state.value.groupedData = grouped

    // 重新计算各城市区块的顶部位置
    nextTick(() => {
      getMenuItemTop()
    })

    paging.value?.complete([])
  }
</script>

<style lang="scss" scoped></style>
