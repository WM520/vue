/**
 * Created by wm on 13/04/2017.
 */

Vue.component('coupon', {
    template:`<input type="text" placeholder="enter you code" @blur="onCouponApplied">`,
    methods: {
        onCouponApplied: function () {
            this.$emit('applied')
        }
    }
})

new Vue ({
    el:'#app',

    data: {
        couponApplied:false
    },

    methods: {
        onCouponApplied: function () {
            alert("it is applied")
            this.couponApplied = true
        }
    }
})

