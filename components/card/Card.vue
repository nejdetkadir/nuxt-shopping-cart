<template>
  <tr>
    <td>1</td>
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
    </td>
    <td>$1</td>
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
  }
}
</script>

<style scoped>

</style>
