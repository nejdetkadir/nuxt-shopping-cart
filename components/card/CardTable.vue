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
        <Card/>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
name: "cardTable"
}
</script>

<style scoped>

</style>
