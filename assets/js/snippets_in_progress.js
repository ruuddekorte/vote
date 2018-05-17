

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


