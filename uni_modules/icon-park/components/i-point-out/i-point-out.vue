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
export default genContent('i-point-out', IconWrapper('i-point-out',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
