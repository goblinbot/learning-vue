var app1= new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
   el: '#app-4',
   data: {
       todos: [
           { text: 'learn JS' },
           { text: 'Learn Vue' },
           { text: 'Build something awesome' }
       ]
   } 
})

function AddNewToList() {
    app4.todos.push({ text: 'New item' })
}