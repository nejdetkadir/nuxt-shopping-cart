export const state = () => ({
  items: [],
  cart: [],
  totalPrice: 0
})

export const mutations = {
  setItems(state, data) {
    state.items = data
  },
  setCart(state, data) {
    state.cart = data
  },
  setTotalPrice(state, data) {
    state.totalPrice = data
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    let res = await this.$axios.get("/items")
    await commit("setItems", res.data.items)
  },
  addToCard() {

  },
  removeFromCard() {

  },
  changeItemCount() {

  }
}

export const getters = {
  getItems(state) {
    return state.items
  },
  getCart(state) {
    return state.cart
  },
  getTotalPrice(state) {
    return state.totalPrice
  }
}
