<template lang="pug">
  .ibg-node-school(:class="{ loaded: loader }")
    the-header(
      :paddingHeader="paddingHeader"
      :paddingContainer="paddingContainer"
      :paddingLayout="paddingLayout"
      :paddingFlex="paddingFlex"
    )
    tito-widget(event="ibaguejs/nodeschool-en-ibaguejs" v-pre)
    landing-sponsors
    landing-supports
</template>

<script>
import TheHeader from '~/components/layout/TheHeader.vue'
import LandingSponsors from '~/components/landing/LandingSponsors.vue'
import LandingSupports from '~/components/landing/LandingSupports.vue'

export default {
  components: {
    TheHeader,
    LandingSponsors,
    LandingSupports
  },
  head() {
    return {
      script: [{ src: 'https://js.tito.io/v1', async: true }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://css.tito.io/v1.1'
        }
      ]
    }
  },
  data() {
    return {
      loader: false,
      paddingHeader: 'py-5',
      paddingContainer: 'my-5 py-5',
      paddingLayout: 'my-5 py-5',
      paddingFlex: ' py-4'
    }
  },
  mounted() {
    setTimeout(() => {
      this.loader = true
    }, 2000)
  }
}
</script>

<style lang="scss">
.tito-wrapper {
  background-color: white;
}
</style>
