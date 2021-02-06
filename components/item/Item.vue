<template>
  <tr>
    <td>{{item.name}}<span class="price">${{item.price}}</span></td>
    <td>
      <v-btn icon text color="green" @click="changeValue(true)">
        <v-icon>
          add
        </v-icon>
      </v-btn>
      {{count}}
      <v-btn icon text color="red" @click="changeValue(false)">
        <v-icon>
          remove
        </v-icon>
      </v-btn>
      <v-btn color="indigo" fab class="white--text" x-small>
        <v-icon small>add_shopping_cart</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    changeValue(val) {
      if (val) {
        this.count++
      } else {
        if (this.count > 1) {
          this.count--
        }
      }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
