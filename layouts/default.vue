<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="indigo"
    >
      <v-toolbar-title class="white--text font-weight-bold" v-text="title.toUpperCase()" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      color="indigo"
      class="white--text"
    >
      <span>&copy; {{ new Date().getFullYear() }} | {{title}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Nuxt Shopping Cart'
    }
  },
}
</script>
