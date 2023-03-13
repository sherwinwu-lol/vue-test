<template>
    <div>
        <!--插值-->
        <span>文本插值: {{msg}}</span>
        <!--v-*: 指令-->
        <!--v-bind: 绑定属性-->
        <!--v-on:*: 绑定事件-->
        <p>原始HTML: 应该是百度的链接<span v-html="rawHtml"></span></p>
        <div :id="dynamicId">id:wusd-yellow,字体是黄色</div>
        <button :disabled="isButtonDisabled">布尔属性,只要非false,都是ture,包括空字符串</button>
        <div>
            {{number + 1}} <br>
            {{ok? 'Yes':'No'}} <br>
            xiaoyou? :{{ message.split('').reverse() }} <br>
            <div :id="`wusd-${blue}`">是蓝色的吗?</div>
        </div>
        <p v-if="seen">If seen, you can see me</p>
        <p v-else>If seen is false, you can see me</p>
        <a :href="url">这是在data里指定的url,应该是Sogou</a><br>
        <a @click="sayHello" class="a-text">If you click it, salah will say hello in your console</a>
        <br>
        <a :[attributeName]="url">属性也可以是动态的</a>
        <br>
        <form @submit.prevent="onSubmit">
            这是个表单,用了submit的修饰符号 prevent
            <button type="submit">提交</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'Hello Vue',
                rawHtml: '<a href="http://www.baidu.com">百度</a>',
                dynamicId: 'wusd-yellow',
                isButtonDisabled: "",
                number: 0,
                ok: true,
                message: "hello youyuxi",
                blue: "blue",
                seen: false,
                url: "http://www.sogou.com",
                attributeName: 'name'
            }
        },
        mounted() {
            console.log('mounted');
            console.log(this.msg)
            console.log(this.message);
            console.log(this.$reverse(this.message));
        },
        methods: {
            sayHello: () => {
                console.log('Salah, hello!')
            },
            onSubmit: () => {
                console.log("Submit");
            }
        },

    }
</script>

<style scoped>
    #wusd-yellow {
        color: yellow;
    }

    #wusd-blue {
        color: blue;
    }

    #wusd-red {
        color: red;
    }
    .a-text {
        text-decoration: underline;
    }
</style>
