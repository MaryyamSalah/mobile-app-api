<template>
    <div class="container">
         <div class="toggle-status d-flex justify-content-end">
    <label class="toggle-switch top-right-div">
      <input type="checkbox" v-model="isActive" @change="handleToggle">
      <span class="slider"></span>
    </label>
    <span class="status-label" :class="{ active: isActive }">{{ isActive ? 'Active' : 'Inactive' }}</span>
  </div>
    <div class="row">
         
          

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length >0">
                    <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index" >
                        {{ error[0] }}
                    </li>
                    </ul>
              <div class="col">
                  <label for="file-input" class="circle-button">
      <i class="fas fa-plus"></i>
      <input id="file-input" type="file" @change="handleFileSelect" accept="image/*" hidden>
    </label>
     <div class="col-lg-8" v-if="selectedImage">
      <img :src="selectedImage" alt="Selected Image" class="selected-image img-fluid">
    </div>
      </div>
          <div class="col">
                <input type="text" placeholder="Category Title" v-model="model.product.category" class="form-control mb-3" />
            </div>
             <div class="col">
                <input type="text" placeholder="Product Name" v-model="model.product.title" class="form-control mb-3" />
            </div>
             <div class="col">
                <input type="text" placeholder="Price" v-model="model.product.price" class="form-control mb-5" />
            </div>
        </div>
    
            <div class="col-md-20">
                <input type="text" placeholder="Description" v-model="model.product.description" class="form-control mb-3" />
            </div>
            <div>
                <button type="button" @click="addProduct" class="btn btn-primary">Add +</button>
            </div>
        </div>
    

</template>


<script>
import axios from 'axios'

export default {
    name: 'productCreate' ,
    data(){
        return{
             isActive: false,
            selectedImage: null,
            errorList: '',
            model:{
                product:{
                    category:'',
                    title:'',
                    price:'',
                    description:''
                }

            }
        }
    },
    methods:{
        addProduct(){
            var mythis =this;
            axios.post('https://dummyjson.com/products/add' ,this.model.product)
            .then(res => {

                console.log(res.data)
                // alert(res.json.message);

                this.model.product = {
                    category:'',
                    title:'',
                    price:'',
                    description:''
                }

                this.errorList ='';

            }).catch(function(error){

                 if (error.response) {
                    if(error.response.status == 422){
                        mythis.errorList = error.response.data.errors;
                    }
                //   console.log(error.response.data);
                //   console.log(error.response.status);
                //   console.log(error.response.headers);
                   } else if (error.request) {
      
                  console.log(error.request);
                    } else {
      
               console.log('Error', error.message);
                }

            });
        },
         handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
     handleToggle() {
      // Perform any logic when the status is toggled
    }
}}

</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "@/components/Create.css"
</style>







