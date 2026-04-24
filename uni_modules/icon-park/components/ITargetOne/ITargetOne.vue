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
export default genContent('ITargetOne', IconWrapper('ITargetOne',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M23.8887 39.8887C32.7287 39.8887 39.8887 32.7287 39.8887 23.8887C39.8887 15.0487 32.7287 7.88867 23.8887 7.88867C15.0487 7.88867 7.88867 15.0487 7.88867 23.8887C7.88867 32.7287 15.0487 39.8887 23.8887 39.8887Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M23.8887 31.8887C28.3087 31.8887 31.8887 28.3087 31.8887 23.8887C31.8887 19.4687 28.3087 15.8887 23.8887 15.8887C19.4687 15.8887 15.8887 19.4687 15.8887 23.8887C15.8887 28.3087 19.4687 31.8887 23.8887 31.8887Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M23.8887 25.8887C24.9887 25.8887 25.8887 24.9887 25.8887 23.8887C25.8887 22.7887 24.9887 21.8887 23.8887 21.8887C22.7887 21.8887 21.8887 22.7887 21.8887 23.8887C21.8887 24.9887 22.7887 25.8887 23.8887 25.8887Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M23.8887 7.88867V3.88867" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M37.8887 43.8887L33.8887 36.8887" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M13.8887 36.8887L9.88867 43.8887" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
