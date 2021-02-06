<template>
  <tr>
    <td>{{item.name}}</td>
    <td>
      <v-btn icon text color="green" @click="changeValue(true)">
        <v-icon>
          add
        </v-icon>
      </v-btn>
      {{item.count}}
      <v-btn icon text color="red" @click="changeValue(false)">
        <v-icon>
          remove
        </v-icon>
      </v-btn>
    </td>
    <td>${{item.totalPrice}}</td>
    <td><v-btn color="red" fab class="white--text" x-small>
      <v-icon small>restore_from_trash</v-icon>
    </v-btn></td>
  </tr>
</template>

<script>
export default {
  name: "Card",
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
