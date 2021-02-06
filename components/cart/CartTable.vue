<template>
  <v-simple-table
    fixed-header
  >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
      </thead>
      <tbody>
        <Cart v-for="item in cart" :item="item" :key="item.id"/>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "cardTable",
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
