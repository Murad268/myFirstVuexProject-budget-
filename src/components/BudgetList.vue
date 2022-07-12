<template>
      <div class="list">
         <button class="btn btn-success"  @click="filtes('ALL')">ALL</button>
         <button class="btn btn-primary" @click="filtes('INCOME')">INCOME</button>
         <button class="btn btn-danger" @click="filtes('OUTCOME')">OUTCOME</button>
      <div class="budget__header">
         {{header}}
      </div>
      <template v-if="isEmpty">
         <BudgetItemVue :key="cost.id" v-for="cost in filterCost(filter, costs)" :cost="cost"/>
      </template>
      <template v-else>
         <div class="empty">
            empty
         </div>
      </template>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BudgetItemVue from './BudgetItem.vue'
   export default {
      name: "budgetList",
      components: {
         BudgetItemVue
      },
      computed: {
         ...mapGetters("CostStore", ["costs"]),
         isEmpty() {
            return this.costs.length > 0
         }
      },
      data() {
         return {
            header: "Budget List",
            filter: 'ALL'
         }
      },
      methods: {
         filterCost(filter, items) {
            switch(filter) {
               case "ALL":
                  return items
               case "INCOME":
                  return items.filter(item => item.type == "INCOME") 
               case "OUTCOME":
                  return items.filter(item => item.type == "OUTCOME") 
            }
         },
         filtes(term) {
            this.filter = term
         }
      }
      
   }
</script>

<style  scoped>
   .list {
      width: 50%;
      border: 1px solid rgba(0, 0, 0, 0.4);
      margin: 0 auto;
      padding: 20px;
      margin-bottom: 50px;
   }
   .budget__header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);;
      padding-bottom: 15px;
      margin-bottom: 20px;
   }
   .empty {
      border: 4px solid red;
      font-size: 30px;
      font-weight: 800;
   }
   button {
      margin-right: 30px;
      margin-bottom: 20px;
   }
</style>