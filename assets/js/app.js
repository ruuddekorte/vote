// app.js
// #####################################################################
Vue.config.devtools = true;

console.log('hello world');


Vue.component('app-list',{
  data () {
    return { namelist: null }
  },
  mounted () {
    console.log('app-list');
    $.getJSON('assets/list.json', json => {
      this.namelist = json;
      console.log(namelist);
    });  //  Invalid left-hand side in assignment
  },

  template: `
    <ul id="example-1">
        <li v-for="namelist in name">
            {{ item.name }}
        </li>
    </ul>
  `
})




Vue.component('app-nav', {
  data () {
    return {
      active: true
    }
  },
  template: `
    <aside :class="{ active: active}">
      <div class="element3"><img class="topgear" src="assets/img/menu_open.svg" @click="toggleNav()"></div>
      <div> 
        <form class="aside-question" @submit.prevent="onSubmit">
          <div> <label for="question">Question:</label></div>
          <div> [ input field here ]</div>
          <div> <input type="submit" value="Submit"> </div>
        </form>
      </div>
      <div>  </div>
      <app-list></app-list>
      <div> <hr> </div>
      <div> Liste : </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Ana </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Antoine </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Céline </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Corentin </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Christelle </div>
      <div> <img src="assets/img/error.svg" class="icon" /> David </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Florian </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Fréderic </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Grégory </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Ilham </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Joris </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Mathéo </div>
      <div> <img src="assets/img/success.svg" class="icon" /> Ruud </div>
      <div> <img src="assets/img/error.svg" class="icon" /> Vanessa</div>
      <div> <hr> </div>
      <div> &nbsp; </div>
      <div> &nbsp; </div>

      <!-- menu items from original code snippet -->
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
      console.log('app-nav')
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

