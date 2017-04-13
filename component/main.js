/**
 * Created by wm on 13/04/2017.
 */

Vue.component('task-list', {
    template: '<div><li v-for="tast in tasks">{{ tast.tast }}</li></div>',
    data(){
        return {
            tasks : [
                {tast: 'wangmiao', complete: true},
                {tast: 'wangmiao', complete: true},
                {tast: 'wangmiao', complete: true}
            ]
        };

    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});



var vm = new Vue ({
    el:'#app'
});
