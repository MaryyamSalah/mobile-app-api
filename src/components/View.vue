<template>
   <div class="container m-20 mt-4 p-5 bg-dark text-white rounded">
    <div class="row">
      <div class="col-lg-8">
       <img alt="Image 4" class="img-fluid float-start" src="{{ product.images }}">
      </div>
      <div class="col-lg-4 text-start">
        <div class="row">
          <div class="col-md-6">
            <h6>Category Title</h6>
            <p class="border bg-info p-2 text-black">{{products.category}}</p>
          </div>
          <div class="col-md-6 ">
            <h6>Price($)</h6>
            <p class="border bg-info p-2 text-black ">{{products.price}}</p>
          </div>
          <div class="col-md-6">
            <h6>Product Name</h6>
            <p class="border bg-info p-2 text-black">{{products.title}}</p>
          </div>
          <div class="col-md-6">
            <h6>Status</h6>
            <p class="border bg-info p-2 text-black">{{products.id}}</p>
          </div>

        </div>
       
      </div>
       <div class="col-md-20 text-start">
            <h6 >Description</h6>
            <p class="border bg-info p-4 text-black">{{products.description}}</p>
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
