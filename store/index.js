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
    await commit("setCart", res.data.cart)
    await commit("setTotalPrice", res.data.totalPrice)
  },
  async addToCard({commit}, item) {
    let res = await this.$axios.post('/cart/add', {item})
    await commit("setCart", res.data.cart)
    await commit("setTotalPrice", res.data.totalPrice)

  },
  async removeFromCard({commit}, data) {
    let res = await this.$axios.post('/cart/remove', {
      id: data
    })
    await commit("setTotalPrice", res.data.totalPrice)
    await commit("setCart", res.data.cart)
  },
  async changeItemCount({commit}, data) {
    let res = await this.$axios.post('/cart/change', data)
    commit("setCart", res.data.cart)
    commit("setTotalPrice", res.data.totalPrice)
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
