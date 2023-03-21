<!--v-if: 和v-for不要同时用-->
<!--v-else-if-->
<!--v-else-->
<!--v-show: 不删除DOM,修改CSS是否显示-->

<template>
    <div>
        <h1>{{message}}</h1>
        <ul>
            <li>V-for遍历数组</li>
            <li v-for="item in items">
                message:{{item.message}}
            </li>
            <li v-for="(item, index) in items">
                message:{{item.message}}, index: {{index}}
            </li>
        </ul>
        <ul>
            <li v-for="(value,key) in author">
                属性名: {{key}}, 属性值:{{value}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: 'Hello Vue',
                items: [
                    {
                        message: 'Foo'
                    },
                    {
                        message: 'Bar'
                    }
                ],
                author :{
                    firstName: 'Sherwin',
                    lastName: 'Wu'
                }
            }
        }
    }
</script>

<style scoped>
</style>
