new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        wage: 10,
        coords: {
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        },
        logEvent(e){
            console.log(e)
        },
        logCords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }

    }
})