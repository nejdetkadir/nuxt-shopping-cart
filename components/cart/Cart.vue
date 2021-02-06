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
  methods: {
    changeValue(val) {
      if (val) {
        //this.item.count++
        this.$store.dispatch("changeItemCount", {
          type: val,
          item: this.item
        })
      } else {
        if (this.item.count >= 0) {
          this.$store.dispatch("changeItemCount", {
            type: val,
            item: this.item
          })
        }
      }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
