let lifeData = uni.getStorageSync('lifeData') || {}

let tabbar = lifeData.$tabbar || {}

export default {
  namespaced: true,

  state: {
    // 当前激活索引
    activeIndex: tabbar.activeIndex || 0,
    // tabbar 列表配置
    list: tabbar.list || [
      {
        iconPath: '/static/tabbar/20251223095345.png',
        selectedIconPath: '/static/tabbar/20251223095343.png',
        text: '咨询',
        pagePath: '/pages/index/index',
      },
      {
        iconPath: '/static/tabbar/20251223095341.png',
        selectedIconPath: '/static/tabbar/20251223095342.png',
        text: '我的',
        pagePath: '/pages/my/index',
      },
      {
        iconPath: '/static/tabbar/20251223095340.png',
        selectedIconPath: '/static/tabbar/20251223095337.png',
        text: '测试',
        pagePath: '/pages/test/test',
      },
    ],
  },

  getters: {
    // 获取当前 tab 项
    currentTab(state) {
      return state.list[state.activeIndex] || null
    },
  },

  mutations: {},

  actions: {
    // 切换 tab
    switchTab({ state }, index) {
      if (index < 0 || index >= state.list.length) return
      vk.vuex.set('$tabbar.activeIndex', index)
    },

    // 更新角标数字
    updateBadge({ state }, { index, count }) {
      if (index < 0 || index >= state.list.length) return
      const newList = JSON.parse(JSON.stringify(state.list))
      newList[index].count = count
      vk.vuex.set('$tabbar.list', newList)
    },

    // 更新红点状态
    updateIsDot({ state }, { index, isDot }) {
      if (index < 0 || index >= state.list.length) return
      const newList = JSON.parse(JSON.stringify(state.list))
      newList[index].isDot = isDot
      vk.vuex.set('$tabbar.list', newList)
    },

    // 更新 tabbar 列表
    setList({ state }, list) {
      vk.vuex.set('$tabbar.list', list)
    },
  },
}
