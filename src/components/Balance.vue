<template>
   <div class="balance">
      <span class="title">{{bal}} </span>
      <span :class="className" class="bal">{{balance}}</span>
   </div>
</template>

<script>
   import { mapGetters } from 'vuex'
   export default {
      computed: {
          ...mapGetters("CostStore", ["costs"]),
         balance()  {
            let result = ""
             this.costs.reduce((a, b) => {
              
              if(isNaN(b.value)) {
                  result = "Xhiş edirik düzgün formatlı məbləöi daxil edəsiniz"
              } else {
              
                  result = a + b.value
                  return result 
              }
            }, 0)
            return !isNaN(parseFloat(result))? result + "$":result
         },
         className() {
            return this.balance < 0? "text-danger":this.balance == 0?"text-dark":"text-success"
         },
         bal() {
           return isNaN(parseInt(this.balance))?null:"Balance: "
         }
      }
   }
</script>

<style scoped>
   .balance {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 15px;
   }

</style>