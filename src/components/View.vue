<template>
  <div class="container">
    <div v-if="products" class="row">
      <div class="col-xs-4 item-photo">
     <img class="img-thumbnail" src="{{ product.images }}">
      </div>
     <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
    {{ products.title }}
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
    {{ products.description }}
  </div>
</div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'products' ,
 data() {
  return {
    products: [],
    images :[],
  }
},

 
mounted() {
  this.fetchProductDetails();
  
},
methods: {
  fetchProductDetails() {
    axios.get('https://dummyjson.com/products/1')
      .then(response => {
        this.products = response.data;
        this.images = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}



}
</script>
