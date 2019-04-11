new Vue({
    el: '#app',
    data: {
        name: 'Aga'
    },
    methods: {
        updateName(e){
            //console.log(e.target.value)
            this.name = e.target.value
        }
    }
})

new Vue({
    el: '#app_model',
    data: {
        name: 'Ela'
    },
    methods: {
       
    }
})