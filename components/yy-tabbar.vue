<template>
  <u-tabbar
    v-model="activeIndex"
    :list="tabbarList"
    :borderTop="false"
    :active-color="$u.color.primary"
    inactive-color="#666666"
    hideTabBar
    @change="onChange"
  ></u-tabbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('tabbar', ['list', 'activeIndex']),
      tabbarList() {
        return this.list
      },
      activeIndex: {
        get() {
          return this.$store.state.tabbar.activeIndex
        },
        set(val) {
          this.switchTab(val)
        },
      },
    },
    methods: {
      ...mapActions('tabbar', ['switchTab']),
      // tab 切换回调
      onChange(index) {
        this.switchTab(index)
      },
    },
  }
</script>
