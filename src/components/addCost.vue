<template>
   <div class="add">
      <form @submit.prevent="addCost" action="">
         <label for="select">Type</label>
         <select required @change="changeValue" v-model="formData.type" id="select">
            <option value="income">INCOME</option>
            <option value="outcome">OUTCOME</option>
         </select>
         <label for="comment">comment</label>
         <input required v-model="formData.comment" type="text" id="comment">
         <label for="value">value</label>
         <input required v-model="formData.value" type="text" id="value">
         <button class="btn btn-primary">submit</button>
      </form>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import { uuid } from 'vue-uuid' // Import uuid  
const id = uuid.v1()
   export default {
      data() {
         return {
           formData: {
             id: "",  
             type: "income",
             comment: "",
             value: ""
           },
           id: 3

         }
      },
      computed: {
         id() {
            return Math.random()
         }
      },
      methods: {
         ...mapActions("CostStore", ['addItem']),
         changeValue() {
            if(this.formData.type == "outcome") {
               return this.formData.value = "-" + this.formData.value
            }
         },
         addCost() {
            this.id+=1
            this.addItem(this.formData)
         }
      }
   }
</script>

<style  scoped>
   .add {
      width: 50%;
      margin: 0 auto;
      padding: 40px;
      border: 1px solid rgba(0, 0, 0, 0.3)
   }
   label {
      display: block;
      margin-bottom: 20px;
      margin-top: 20px;
   }
   select {
      width: 100%;
      height: 40px;
   }
   input {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
   }
   button {
      margin-top: 15px;
   }
</style>