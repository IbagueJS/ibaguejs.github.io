<template lang="pug">
  .ibg-landing
    the-header(
      :paddingHeader="paddingHeader"
      :paddingContainer="paddingContainer"
      :paddingLayout="paddingLayout"
      :paddingFlex="paddingFlex"
    )
    .ibg-landing-container
      landing
</template>

<script>
import TheHeader from '~/components/layout/TheHeader.vue'
import Landing from '~/components/landing/Landing.vue'

export default {
  components: {
    TheHeader,
    Landing
  },
  data() {
    return {
      loader: false,
      paddingHeader: 'py-5',
      paddingContainer: 'my-5 py-5',
      paddingLayout: 'my-5 py-5',
      paddingFlex: 'py-4'
    }
  },
  mounted() {
    setTimeout(() => {
      this.loader = true
    }, 500)
  }
}
</script>
