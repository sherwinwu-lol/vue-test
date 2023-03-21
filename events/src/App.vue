<template>
    <div>
        <button @click="count++">内联事件处理器,就是直接用语句, {{count}}</button>
        <br>
        <button @click="greet">Greet</button>
        <br>
        <button @click="sayHello('Selah')">在内联中调用方法</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            name: 'Wusd\'s App'
        }
    },
    methods: {
        greet(event) {
            // 指向当前的组件App.vue????
            alert(`hello ${this.name}, 是Wusds App吗?`)
            if (event) {
                alert(`${event.target.tagName}, 是button吗?`)
            }
        },
        sayHello(name) {
            alert(`Hello ${name}`)
        }
    }
}
</script>

<style scoped>
</style>
