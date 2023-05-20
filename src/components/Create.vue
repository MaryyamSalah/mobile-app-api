<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card header">
                <h4>Add Products</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length >0">
                    <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index" >
                        {{ error[0] }}
                    </li>
                    </ul>
            <div class="mb-3">
                <label for="">Category Title</label>
                <input type="text" v-model="model.product.category" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="">Product Name</label>
                <input type="text" v-model="model.product.title" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="">Price</label>
                <input type="text" v-model="model.product.price" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="">Description</label>
                <input type="text" v-model="model.product.description" class="form-control" />
            </div>
            <div class="mb-3">
                <button type="button" @click="addProduct" class="btn btn-primary">Add +</button>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'productCreate' ,
    data(){
        return{
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
            axios.post('https://dummyjson.com/products' ,this.model.product)
            .then(res => {

                console.log(res.data)
                alert(res.data.message);

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
        }
    }
}

</script>