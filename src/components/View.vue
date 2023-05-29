<template>
   <div class="container m-20 mt-4 mb-4 p-5 bg-dark text-white rounded">
    <div class="row">
      <div class="col-lg-8">
       <img :alt="product-pic" class="img-fluid float-start mb-4 rounded-2" :src="`${products.thumbnail}`" >
      </div>
      <div class="col-lg-4 text-start">
        <div class="row">
          <div class="col-md-6">
            <h6>Category Title</h6>
            <p class="border bg-info p-2 text-black rounded-2">{{products.category}}</p>
          </div>
          <div class="col-md-6 ">
            <h6>Price($)</h6>
            <p class="border bg-info p-2 text-black rounded-2 ">{{products.price}}</p>
          </div>
          <div class="col-md-6">
            <h6>Product Name</h6>
            <p class="border bg-info p-2 text-black rounded-2">{{products.title}}</p>
          </div>
          <div class="col-md-6">
            <h6>Status</h6>
            <p class="border bg-info p-2 text-black rounded-2">{{products.id}}</p>
          </div>

        </div>
       
      </div>
       <div class="col-md-20 text-start">
            <h6 >Description</h6>
            <p class="border bg-info p-4 text-black rounded-2">{{products.description}}</p>
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
