/**
 * Created by wm on 14/04/2017.
 */
/**
 * Created by wm on 13/04/2017.
 */


window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event,callback);
    }

}

Vue.component('coupon', {
    template:`<input type="text" placeholder="enter you code" @blur="onCouponApplied">`,
    methods: {
        onCouponApplied: function () {
            Event.fire('applie')
        }
    }
});

 var vm = new Vue ({
    el:'#app',

    data: {
        couponApplied:false
    },

    created() {
        Event.listen('applie',() => alert("it is applied"));
    }
})

