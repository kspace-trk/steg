new Vue({
    el: "#count",
    data: {
        sheeps: 0,
    },
    methods:{
        countSheeps(){
            this.sheeps += 1;
        }
    }
})