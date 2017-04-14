/**
 * Created by wm on 14/04/2017.
 */


Vue.component('progressview', {
    data() {
        return {
            courseRate:0
        }
    },
    methods: {
        add: function () {
            if(this.courseRate >= 100) {
                alert('您已经完成作业了!')
            } else {
                this.courseRate += 10;
            }

        }
    }
})

new Vue ({
    el:'#app'
})