const CostStore = {
   namespaced: true,
   state: {
      costs: [
         {id: 1, comment: "some income comment", type: "INCOME", value: 50},
         {id: 2, comment: "some outcome comment", type: "OUTCOME", value: -60},
      ]
   },
   getters: {
      costs: ({costs}) => costs
   },
   mutations: {
      delCost(state, id) {
          state.costs = state.costs.filter(cost => cost.id != id)
      },
      addCost(state, cost) {
         return state.costs.push(cost)
      }
   },
   actions: {
      deleteItem({commit}, id) {
         commit("delCost", id)
      },
      addItem({commit}, cost) {
         commit("addCost", {...cost, id: Math.random()})
      }
   },
}

export default CostStore