import Vue from 'vue';
import App from './App.vue';
import hello from './hello.vue';




//new Vue({ el: '#components-demo' })

new Vue({
  el: '#app',
 render: h => h(App),

 // el:'#app' // Templates can be defined as inline strings, like so: 
  //template:'<div class="app-container"><hello-world></hello-world></div>'

});