<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Products<router-link to="/create"
        class="btn btn-secondary float-end">
        Add +</router-link>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
            <th>Status</th>
            <th>Category Title</th>
            <th>Product Name</th>
            <th>Price($)</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.products.length > 0">
            <tr v-for="(product, index) in this.products" :key="index">
          
           <td>{{product.title}}</td>
            <td>{{product.category}}</td>
            <td>{{product.title}}</td>
            <td>{{product.price}}</td>
            <td>
            <router-link to="/"
        class="btn btn-success">
        Edit</router-link>
       <button type="button" class="btn btn-danger">Delete</button>
       <router-link to="/"
        class="btn btn-primary">
        View</router-link>
            </td>
         
            
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'products' ,
  data(){
    return{
      products:[]
    }
  },
  mounted(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      axios.get('https://dummyjson.com/products').then(res => {
        this.products = res.data.products
        // console.log(this.products)

      });
    }
  },
}
</script>
