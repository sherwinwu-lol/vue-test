<!--Vue为v-bind:class和style提供了语法糖-->
<!--可以搭配计算属性来-->
<!--可以用数组-->
<!--可以用三目运算-->
<!--style也可以绑定数组-->
<template>
    <div>
        <div :class="{active: isActive}">这里的class应该时active</div>
        <div :class="{active: isNotActive}">这里的class应该不存在</div>
        <div class="static" :class="{active: isActive, 'text-danger': hasError}">
            多个class值也是阔以的
        </div>
        <div :style="{color: activeColor, fontSize: fontSize}">绑定style, 红色,字体号30px</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isActive: true,
                isNotActive: false,
                hasError: true,
                activeColor: 'red',
                fontSize: '30px'
            }
        }
    }
</script>

<style scoped>
</style>
