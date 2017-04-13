/**
 * Created by wm on 13/04/2017.
 */

Vue.component('message',{

    props:['title', 'body'],


    template: `
         <article class="message"> <div class="message-header"> <p>{{ title }}</p> <div class="message-body">{{body}} </div> </article>
  `,
});


new Vue ({
    el: '#app'
})