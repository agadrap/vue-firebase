new Vue({
    el: '#app',
    data: {
        title: 'lecture 14',
        showName: true,
        showAge: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})

new Vue({
    el: '#appfor',
    data: {
        title: 'lecture 15',
        items: ['harry', 'ron', 'hermiona'],
        ninjas: [
            {name: 'Crystal', age: 25, belt: 'black'},
            {name: 'Jude', age: 10, belt: 'white'},
            {name: 'Aramis', age: 18, belt: 'orange'}
        ]
    },
    methods: {
        
        }
})