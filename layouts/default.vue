<template>
  <v-app dark>
    <v-content>
      <nuxt />
      <the-footer />
    </v-content>
  </v-app>
</template>

<script>
import TheFooter from '~/components/layout/TheFooter.vue'

export default {
  components: {
    TheFooter
  }
}
</script>

<style lang="scss">
.theme--dark.application {
  background-color: #1f2424;
  font-family: 'Fira Sans', sans-serif !important;
  .is-js,
  .has-background-js {
    background: #ffe400 !important;
    border-color: #ffe400 !important;
  }
  .has-background-js-primary {
    background: #375a7f !important;
    border-color: #375a7f !important;
  }
  a {
    text-decoration: none;
  }
  .v-chip {
    .v-chip__content {
      cursor: pointer;
    }
  }
}
</style>
