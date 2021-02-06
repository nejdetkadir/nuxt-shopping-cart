<template>
  <v-row justify="center">
    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
      <h1>Items</h1>
      <ItemTable :items="items"/>
    </v-col>
    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
      <h1>Shopping Cart (Total : ${{totalPrice}})</h1>
      <CartTable :cart="cart"/>
    </v-col>
  </v-row>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

export default {
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    cart() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    }
  }
}
</script>

<style>
table{
  border: 1px solid indigo;
}
.price{
  background-color: #ff0000cc;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}
</style>
