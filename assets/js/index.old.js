// index.js
console.log('index.js');

//Create tabs for “Shipping” and “Details” that display the shipping cost and product details, respectively.

var eventBus = new Vue()

Vue.component('question', {
    props: {
        premium: {
            type: String,
            required: true
        }
    },
    template: `
		<div class="question">
			<h1>{{ question }}</h1>
		</div>

   
     `,
    data() {
        return {
            question: 'Est-ce que Fred doit faire pousser les cheveux?'
	}
    
});


// Vue.component('product-review', {
//     template: `
//     <form class="review-form" @submit.prevent="onSubmit">

//       <p>
//         <label for="name">Name:</label>
//         <input id="name" v-model="name">
//       </p>

//       <p>
//         <label for="review">Review:</label>      
//         <textarea id="review" v-model="review"></textarea>
//       </p>

//       <p>
//         <label for="rating">Rating:</label>
//         <select id="rating" v-model.number="rating">
//           <option>5</option>
//           <option>4</option>
//           <option>3</option>
//           <option>2</option>
//           <option>1</option>
//         </select>
//       </p>

//       <p>
//         <input type="submit" value="Submit">  
//       </p>    
  
//     </form>
//     `,
//     data() {
//         return {
//             name: null,
//             review: null,
//             rating: null,
//             errors: []
//         }
//     },
//     methods: {
//         onSubmit() {
//             if (this.name && this.review && this.rating) {
//                 let productReview = {
//                     name: this.name,
//                     review: this.review,
//                     rating: this.rating
//                 }
//                 eventBus.$emit('review-submitted', productReview)
//                 this.name = null
//                 this.review = null
//                 this.rating = null
//             } else {
//                 if (!this.name) this.errors.push("Name required.")
//                 if (!this.review) this.errors.push("Review required.")
//                 if (!this.rating) this.errors.push("Rating required.")
//             }
//         }
//     }
// })

// Vue.component('product-tabs', {
//     props: {
//         reviews: {
//             type: Array,
//             required: false
//         }
//     },
//     template: `
//       <div>
      
//         <ul>
//           <span class="tabs" 
//                 :class="{ activeTab: selectedTab === tab }"
//                 v-for="(tab, index) in tabs"
//                 @click="selectedTab = tab"
//                 :key="tab"
//           >{{ tab }}</span>
//         </ul>

//         <div v-show="selectedTab === 'Reviews'">
//             <p v-if="!reviews.length">There are no reviews yet.</p>
//             <ul v-else>
//                 <li v-for="(review, index) in reviews" :key="index">
//                   <p>{{ review.name }}</p>
//                   <p>Rating:{{ review.rating }}</p>
//                   <p>{{ review.review }}</p>
//                 </li>
//             </ul>
//         </div>

//         <div v-show="selectedTab === 'Make a Review'">
//           <product-review></product-review>
//         </div>
    
//       </div>
//     `,
//     data() {
//         return {
//             tabs: ['Reviews', 'Make a Review'],
//             selectedTab: 'Reviews'
//         }
//     }
// })

// Vue.component('info-tabs', {
//     props: {
//         shipping: {
//             required: true
//         },
//         details: {
//             type: Array,
//             required: true
//         }
//     },
//     template: `
//       <div>
      
//         <ul>
//           <span class="tabs" 
//                 :class="{ activeTab: selectedTab === tab }"
//                 v-for="(tab, index) in tabs"
//                 @click="selectedTab = tab"
//                 :key="tab"
//           >{{ tab }}</span>
//         </ul>

//         <div v-show="selectedTab === 'Shipping'">
//           <p>Postage and packaging : </p>
//           <ul>
//             <li>{{ shipping }}</li>
//           </ul>
//         </div>

//         <div v-show="selectedTab === 'Details'">
//           <ul>
//             <li v-for="detail in details">{{ detail }}</li>
//           </ul>
//         </div>
    
//       </div>
//     `,
//     data() {
//         return {
//             tabs: ['Shipping', 'Details'],
//             selectedTab: 'Shipping'
//         }
//     }
// })




// var app = new Vue({
//     el: '#app',
//     data: {
//         premium: false,
//         cart: []
//     },
//     methods: {
//         updateCart(id) {
//             this.cart.push(id)
//         }
//     }
// })