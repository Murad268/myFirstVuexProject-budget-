<template>
   <div class="budget">
      <div class="comment">{{cost.comment}}</div>
      <div class="budget__right">
          <div class="value">{{cost.value}}</div>
         <button @click="deleteCost(cost.id)" class="btn btn-danger">Delete</button>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
   export default {
      props: ["cost"],
      methods: {
         ...mapActions("CostStore", ['deleteItem']),
         deleteCost(id) {
            confirm()?this.deleteItem(id):""
         }
      }
   }
</script>

<style  scoped>
   .budget {
      margin-top: 20px;
   }
   .budget, .budget__right {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .budget__right {
      width: 30%;
   }
</style>