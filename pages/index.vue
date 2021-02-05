<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
      <h1>Items</h1>
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
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }} <span class="price">${{ item.calories }}</span></td>
            <td>
              <v-btn icon text color="green">
                <v-icon>
                  add
                </v-icon>
              </v-btn>
              <input type="number" value="1">
              <v-btn icon text color="red">
                <v-icon>
                  remove
                </v-icon>
              </v-btn>
              <v-btn color="indigo" fab class="white--text" x-small>
                <v-icon small>add_shopping_cart</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
      <h1>Shopping Cart</h1>
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
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>
              <v-btn icon text color="green">
                <v-icon>
                  add
                </v-icon>
              </v-btn>
              <input type="number" value="1">
              <v-btn icon text color="red">
                <v-icon>
                  remove
                </v-icon>
              </v-btn>
            </td>
            <td>${{item.calories}}</td>
            <td><v-btn color="red" fab class="white--text" x-small>
              <v-icon small>restore_from_trash</v-icon>
            </v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

export default {
  data () {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
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
input{
  width: 30px;
  outline: none;
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
