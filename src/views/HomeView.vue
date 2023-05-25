<template>
  <div class="container">
    <div class="card">
      <div class="card-header ">
        <h1 class="text-start">Products<router-link to="/create"
        class="btn btn-success float-end">
        Add +</router-link>
        </h1>
      </div>
      <div class="card-body  bg-light ">
        <table class="table table-bordered table-striped table-hover table-responsive-sm">
          <thead class="table-success">
            <tr>
            <th>Status</th>
            <th class="mb-3"> <select class="form-select" v-model="selectedCategory" @change="fetchData">
        <option value="">Select a category</option>
        <option v-for="(category,index) in categories"  :key="index">
          {{ category.category}}
        </option>
      </select></th>
            <th>Product Name</th>
            <th>Price($)</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.products.length > 0">
            <tr v-for="(product, index) in this.products" :key="index">
          
           <td>{{product.id}}</td>
            <td>{{product.category}}</td>
            <td>{{product.title}}</td>
            <td>{{product.price}}</td>
            <td>
              <div class="btn-group-vertical">
               
            <router-link :to="{path:'/products/'+ +product.id+'/Edit'}"
        class="btn btn-outline-success btn-sm  ">
        Edit</router-link>
        </div>
       
       <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteProduct(product.id)" >Delete</button>
      
       
       <router-link to="/view"
        class="btn btn-outline-info btn-sm">
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
      products:[],
      selectedCategory: '',
      categories: [],
      selectedCategories: []
    }
  },
  mounted(){
    this.getProducts();
     axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    getProducts(){
      axios.get('https://dummyjson.com/products').then(res => {
        this.products = res.data.products
        // console.log(this.products)

      });
    },
fetchData() {
     axios.get(`https://dummyjson.com/products/categories${this.selectedCategory}`)
        .then(response => {
          this.selectedCategories = response.data;
        })
        .catch(error => {
          console.error(error);
        });
},
    
    deleteProduct(productId){
      
      if(confirm('Are you sure, you want to delete this data?')){
        axios.delete(`https://dummyjson.com/products/${productId}`)
        .then(res => {

          alert(res.data.message);
          this.getProducts();
        })
        .catch(function(error){
          if(error.response){
            if(error.response.status == 404){
              alert(error.response.data.message);
            }
          }
        })
      }
    }
  },
}
</script>
