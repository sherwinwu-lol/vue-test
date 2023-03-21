<template>
    <div>
        <!--直接用event传参-->
        <input :value="text" @input="useEvent($event)" placeholder="这里是直接用event传参">{{text}}<br>
        输入<input v-model="text2" placeholder="这里用的v-model的syntactic sugar">{{text2}}<br>
        多行输入<textarea v-model="text3" placeholder="add multiple lines"></textarea>{{text3}}<br>
        单一的复选 <input type="checkbox" v-model="checked"/> {{checked}}<br>
        多个复选值放在数组里 <input type="checkbox" value="Chandler" v-model="checkedArr">
        <input type="checkbox" value="Ross" v-model="checkedArr">
        <input type="checkbox" value="Phobes" v-model="checkedArr"> {{checkedArr}}
        <br>
        单选 <input type="radio" v-model="gender" value="man">
        <input type="radio" v-model="gender" value="woman">{{gender}}
        <br>
        选择器 {{selectValue}}
        <select v-model="selectValue">
            <option disabled value="">Please select me</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c1111">C</option>
        </select>
        <br>
        选择器多值 {{selectValueArr}}
        <select v-model="selectValueArr" multiple>
            <option disabled value="">Please select me</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c1111">C</option>
        </select>
        <br>
        v-for渲染的选择器 {{selectValue2}}
        <select v-model="selectValue2">
            <option v-for="(item, index) in options" :value="item.value">{{item.text}}</option>
        </select>
        <br>
        不想实时同步用.lazy{{lazyText}}
        <input type="text" v-model.lazy="lazyText">
        <br>
        想要数字用.number {{age}}
        <input type="text" v-model.number.lazy="age">
        <br>
        想要trim用.trim {{trimedText}}
        <input type="text" v-model.trim.lazy="trimedText">
        <br>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                trimedText: '',
                age: undefined,
                lazyText: '',
                text: '',
                text2: '',
                text3: '',
                checked: false,
                checkedArr: [],
                gender: '',
                selectValue: '',
                selectValueArr: [],
                options: [
                    {text: 'One', value: 'A'},
                    {text: 'Two', value: 'B'},
                    {text: 'Three', value: 'C'},
                ],
                selectValue2: ''
            }
        },
        methods: {
            useEvent(event) {
                console.log(event.target.value)
                this.text = event.target.value
            },
            printData() {
                console.log('text1:' + this.text)
                console.log('\n');
                console.log('text2:' + this.text2)
            }
        }
    }
</script>

<style scoped>
</style>
