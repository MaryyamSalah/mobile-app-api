<template>
  <!-- <div class="container">
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
  </div> -->
   <div class="container">
    <div class="row">
      <div class="col-lg-8">
       <img alt="Image 4" class="img-fluid" src="{{ product.images }}">
      </div>
      <div class="col-lg-4 text-start">
        <div class="row">
          <div class="col-md-6">
            <h6>Category Title</h6>
            <p class="border p-2">{{products.category}}</p>
          </div>
          <div class="col-md-6">
            <h6>Price($)</h6>
            <p class="border p-2">{{products.price}}</p>
          </div>
          <div class="col-md-6">
            <h6>Product Name</h6>
            <p class="border p-2">{{products.title}}</p>
          </div>
          <div class="col-md-6">
            <h6>Status</h6>
            <p class="border p-2">{{products.id}}</p>
          </div>

        </div>
       
      </div>
       <div class="col-md-20 text-start">
            <h6 >Description</h6>
            <p class="border p-2">{{products.description}}</p>
          </div>
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
