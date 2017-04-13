/**
 * Created by wm on 13/04/2017.
 */

Vue.component('tabs',{
    template: `
<div>


   <div class="tabs">
  <ul>
   <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
   <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
</li>
  </ul>
</div> 
<div class="tabs-details">
<slot></slot>
</div>
</div>
`,


    data() {
        return {
            tabs:[]
        }
    },

    created() {
        this.tabs = this.$children;
    },
    mounted() {
        console.log(this.$children)
    },
    methods: {

        selectTab(selectTab) {
            console.log(selectTab.name);
            this.tabs.forEach(tab => {
               tab.isActive = (tab.name == selectTab.name) ;
            });
        }
    }
})

Vue.component('tab',{
    template:`<div v-show="isActive"><slot></slot></div>`,
    props:{
        name:{required:true},
        selected:{default:false}
    },

    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
})


var vm = new Vue({
    el: '#app'
})