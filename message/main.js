/**
 * Created by wm on 13/04/2017.
 */

Vue.component('message',{

    props:['title', 'body'],


    data() {
        return {
            isVisable: true
        }
    },

    template: `
         <article class="message" v-show="isVisable"> 
         <div class="message-header"> 
         <p>{{ title }}</p> 
         <button type="button" @click="isVisable=false">X</button>
         </div>
         <div class="message-body">
            <p>{{body}}</p> 
         </div> 
         </article>
  `,
});


new Vue ({
    el: '#app'
})