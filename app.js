new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Aga',
        url: 'http://youtube.com',
        classes: ['one', 'two'],
    },
    methods: {
        greet(time){
            return `Hello there and good ${time}, ${this.name}`
        }
    }
})