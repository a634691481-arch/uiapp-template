<template>
  <view class="a-icon-svg" :style="[boxStyle]">
    <!-- #ifdef APP-NVUE -->
    <image class="a-icon-pack-image" :style="[boxStyle]" :src="png" mode="scaleToFill"></image>
    <web-view v-if="isShow" class="__wh-0" :ref="_uid"  @onPostMessage="changeMessage" 
    src="/uni_modules/icon-park/hybrid/html/index.html" ></web-view>
    <!-- #endif -->
    <!-- #ifndef APP-NVUE -->
    <image class="a-icon-pack-image" :src="url" mode="aspectFit"></image>
    <!-- #endif -->
  </view>
</template>

<script>
import { IconWrapper , genContent } from '../runtime'
export default genContent('i-four-leaves', IconWrapper('i-four-leaves',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M44 4.00006C44 4.00006 33.5899 2.20108 30 8.00006C27.3278 12.3167 31 17.0001 31 17.0001M44 4.00006L31 17.0001M44 4.00006C44 4.00006 45.799 14.4102 40 18.0001C35.6834 20.6723 31 17.0001 31 17.0001M31 17.0001L28 20.0001" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M31 31L28 28M44 44C44 44 33.5899 45.799 30 40C27.3278 35.6834 31 31 31 31L44 44ZM44 44C44 44 45.799 33.5899 40 30C35.6834 27.3278 31 31 31 31L44 44ZM44 44L31 31L44 44Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M17.2638 17.0001L20.2638 20.0001M4.26374 4.00006C4.26374 4.00006 14.6739 2.20108 18.2638 8.00006C20.936 12.3167 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006C4.26374 4.00006 2.46475 14.4102 8.26374 18.0001C12.5804 20.6723 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006L17.2638 17.0001L4.26374 4.00006Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M17.2638 31L20.2638 28M4.26374 44C4.26374 44 14.6739 45.799 18.2638 40C20.936 35.6834 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44C4.26374 44 2.46475 33.5899 8.26374 30C12.5804 27.3278 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44L17.2638 31L4.26374 44Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
