

Vue.component('aside-question', {
    template: `
    <form class="aside-question" @submit.prevent="onSubmit">

      <p>
        <label for="question">Question:</label>
        <input id="question" v-model="question">
      </p>


      <p>
        <input type="submit" value="Submit">  
      </p>    
  
    </form>
    `,
    data() {
        return {
            question: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.question) {
                let theQuestion = {
                    this.question,
                }
                eventBus.$emit('quesion-submitted', theQuestion)
                this.question = null
            } else {
                if (!this.question) this.errors.push("your question, please?")
            }
        }
    }
})



                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================



        <div v-show="selectedTab === 'Details'">
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </div>
    


                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================



new Vue({
  el: '#app',
  data: {
    jsonData: []
  },
  mounted () {
    this.loadJsonData();
  },
  methods: {
    loadJsonData(){
       setTimeout(()=>{
          this.jsonData = ["first", "Second", "Third", "And So On"]
       }, 300)
    }
  }
})
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
  <ul>
    <li v-for="data in jsonData">{{data}}</li>
  </ul>
</div>

                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================


        

Just assign the import to a data property

<script>
      import json from './json/data.json'
      export default{
          data(){
              return{
                  myJson: json
              }
          }
      }
</script>

then loop through the myJson property in your template using v-for

<template>
    <div>
        <div v-for="data in myJson">{{data}}</div>
    </div>
</template>


                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================

w to solve this here:

var dataURL = 'https://jsonplaceholder.typicode.com/posts';

var App = new Vue({
  el: '#app',
  data: {
    posts: [] // initialize empty array
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.posts = data;
    });
  }
})

                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================
                              ===================================


