<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="click">点击+1: {{count}}</button>
    </div>
</template>
<script>
    import {debounce} from 'lodash-es'

    export default {
        data() {
            return {
                // 响应式状态, 虽然count做了很多次改变,但是Vue只在最后一次更新DOM
                count: 1,
                someObject: {},
            }
        },
        created() {
            this.debouncedClick = debounce(this.click, 500)
        },
        unmounted() {
            // 销毁掉
            this.debouncedClick.cancel();
        },
        mounted() {
            console.log(this.count)
            this.increment();
            console.log(this.count)
            this.count++
            console.log(this.count)

            const newObject = {}
            // 这是一个代理对象
            this.someObject = newObject
            console.log(newObject === this.someObject) //false
        },
        methods: {
            increment() {
                this.count++;
                console.log("increment时" + this.count)
                this.$nextTick(() => {
                    // 访问更新后的DOM
                    console.log("应该是等待DOM更新完时" + this.count)
                })
            },
            increment2: () => {
                // has this of his own!!!
            },
            //如果在其它函数共用的话,许多组件实例会共享这个function,和延时
            // click: debounce(function () {
            //     console.log("防抖了500ms")
            // }, 500)
            // click: this.debouncedClick(function () {
            //     this.increment();
            // }, 500)
        }
    }
</script>

<style scoped>
</style>
