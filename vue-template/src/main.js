import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.msg= function(str) {
    return "global hello";
}

app.config.globalProperties.$reverse= function(str) {
    return str.splice('').reverse();
}

app.config.errorHandler = (err) => {
//    处理错误
}
// 注册组件
// app.component('TodoDeleteButton', TodoDeleteButton)

// createApp -> App.vue -> TodoList, TodoFooter
//        TodoList->TodoItem
// mount(#app): 挂载元素渲染
app.mount('#app')