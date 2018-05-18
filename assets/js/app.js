// app.js
// #####################################################################





Vue.component('app-nav', {
  data () {
    return {
      active: true
    }
  },
  template: `
    <aside :class="{ active: active}">
      <div class="element3"><img class="topgear" src="assets/img/menu_open.svg"  @click="toggleNav()"></div>
      <div> 
        <form class="aside-question" @submit.prevent="onSubmit">
        <label for="question">Question:</label>
                  <input type="submit" value="Submit"> 
             
        </form>
      </div>
      <div>  </div>
      <div> <hr> </div>
      <div> Liste : </div>
      <div> <img src="assets/img/error.svg" class="icon" /> John </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Jake </div>
      <div> <img src="assets/img/success.svg" class="icon" /> Bob </div>
      <div> <hr> </div>
      <div> &nbsp; </div>
      <div> &nbsp; </div>
      <nav> <a href="#">Item1</a> <a href="#">Item2</a> <a href="#">Item3</a> </nav>
    </aside>
  `,
  methods: {
    toggleNav () {
      this.$parent.$emit('toggleNav')
    }
  },
  mounted () {
    this.$parent.$on('toggleNav', () => {
      console.log('received')
      this.active = !this.active
    })
  }
})







Vue.component('app-main', {
  template: `
    <div class="wrapper">
      <header>
        <div class="element1"> JE VOTE ! </div>
        <div class="element2"><img class="gear" src="assets/img/menu_close.svg"  @click="toggleNav()"></div>
      </header>
      <main>
        <div id="container">
          <h1> LLLLLLL </h1>
          <div class="voter">
            <div class="nom">
              Moi, (nom) je vote
            </div>
            <div class="choix">
              <button class="btnYes">OUI</button>
              <button class="btnNo">NON</button> <br/>
              <button class="btn">Je ne sais pas</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
          <div class="nothing"> &copy; SIMPLON RODEZ - 2018</div>
      </footer>
    </div>
  `,
  methods: {
    toggleNav () {
      this.$parent.$emit('toggleNav')
    }
  }
})










var App = new Vue({
  el: '#app'
})

