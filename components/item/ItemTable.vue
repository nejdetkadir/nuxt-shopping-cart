<template>
  <v-simple-table
    class="table"
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
      </tr>
      </thead>
      <tbody>
        <Item/>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
name: "ItemTable"
}
</script>

<style scoped>

</style>
