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
export default genContent('i-honey-one', IconWrapper('i-honey-one',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="4.92871" y="13.2239" width="11" height="5" rx="2" transform="rotate(-46.0247 4.92871 13.2239)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<rect x="19.3213" y="27.1108" width="11" height="5" rx="2" transform="rotate(-46.0247 19.3213 27.1108)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<rect x="6.44336" y="18.8545" width="17" height="5" rx="2" transform="rotate(-46.0247 6.44336 18.8545)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<rect x="13.6406" y="25.7981" width="17" height="5" rx="2" transform="rotate(-46.0247 13.6406 25.7981)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<rect x="7.26465" y="25.2048" width="25" height="5" rx="2" transform="rotate(-46.0247 7.26465 25.2048)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<path d="M25.0029 28.4238L29.169 24.106L43.5756 38.0062L39.4095 42.3241L25.0029 28.4238Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M21 40.25C21 42.3211 19.2091 44 17 44C14.7909 44 13 42.3211 13 40.25C13 38.1789 17 34 17 34C17 34 21 38.1789 21 40.25Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
