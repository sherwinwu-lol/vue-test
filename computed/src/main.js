import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

app.config.errorHandler = (err) => {
//    处理错误
}
// 注册组件
// app.component('TodoDeleteButton', TodoDeleteButton)

// createApp -> App.vue -> TodoList, TodoFooter
//        TodoList->TodoItem
// mount(#app): 挂载元素渲染