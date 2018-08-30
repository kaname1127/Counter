Vue.component('button-counter', {
    //関数でそれぞれのcounterが独自のオブジェクトを用意
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div><span>count ： </span><button v-on:click="count++">{{ count }}</button></div>'
})

var app = new Vue({
    el: '#app',
})