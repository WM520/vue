/**
 * Created by wm on 13/04/2017.
 */

Vue.component('modal',{
    template:`
     <div class="modal is-active">
        <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        爱你的人
                    </p>
            </div>
        </div>
         <button class="modal-close" @click="$emit('close')"></button>
    </div>
   
        
        
    `
})


var vm = new Vue({
    el: '#app',
    data: {
        showModel: false,
        showButton: true
    },
    methods: {
        swithShow: function () {
            // vm.showButton = !vm.showButton;
            vm.showModel = true;
        }
    }
})