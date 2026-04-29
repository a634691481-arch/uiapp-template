<template>
  <u-popup :modelValue="modelValue" @update:modelValue="onInput" mode="bottom" border-radius="16">
    <view class="flex flex-col h-full">
      <view class="sticky top-0 z-10 flex items-center justify-between p-3">
        <view class="text-base font-medium text-gray-900">{{ title }}</view>
        <!-- <u-icon name="close" size="24" color="#999" @click="close"></u-icon> -->
        <zero-icon name="ri:close-line" size="24" color="#999" @click="close"></zero-icon>
      </view>
      <scroll-view scroll-y class="flex-1 w-full">
        <view class="flex flex-col gap-1 p-3">
          <view
            class="active:bg-gray-50 flex items-center justify-between p-3 rounded-md"
            v-for="item in themes"
            :key="item.name"
            @click="selectTheme(item)"
          >
            <view class="flex items-center gap-3">
              <view
                class="w-6 h-6 border border-gray-200 rounded-full"
                :style="{ backgroundColor: item.color.primary }"
              ></view>
              <view class="text-sm text-gray-700">{{ item.label }}</view>
            </view>
            <zero-icon name="ri:check-line" size="20" :color="activeColor" v-if="currentThemeName === item.name" />
          </view>
        </view>
      </scroll-view>
    </view>
  </u-popup>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import defaultThemes from '@/common/function/uview-pro.theme'
  import { useTheme } from '@/uni_modules/uview-pro'

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '选择主题',
    },
    themes: {
      type: Array,
      default: () => defaultThemes,
    },
    activeColor: {
      type: String,
      default: '',
    },
  })

  const emit = defineEmits(['update:modelValue', 'change'])

  const { setTheme, getCurrentTheme } = useTheme()
  const currentThemeName = ref('')

  // 同步当前主题名称
  watch(
    () => props.modelValue,
    val => {
      if (val) {
        const theme = getCurrentTheme()
        if (theme) currentThemeName.value = theme.name
      }
    },
  )

  function onInput(val) {
    emit('update:modelValue', val)
  }

  function close() {
    emit('update:modelValue', false)
  }

  function selectTheme(item) {
    setTheme(item.name)
    currentThemeName.value = item.name
    close()
    emit('change', item)
  }
</script>

<style lang="scss" scoped></style>
