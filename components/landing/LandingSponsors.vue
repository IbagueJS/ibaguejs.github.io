<template lang="pug">
  .sponsors
    v-container.text-xs-center(grid-list-md)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          h2.display-1 Patrocinadores
        v-flex(
          xs4,
          :class="{'px-2': $vuetify.breakpoint.smAndDown}"
          v-for="sponsor in sponsors"
          :key="sponsor.id"
        )
          a(:href="sponsor.page", target="_blank")
            v-img(
              height="auto",
              width="100%",
              :max-height="sponsor.maxHeight"
              :src="sponsor.image"
              aspect-ratio="1",
              contain
            )
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          id: 1,
          page: 'https://nodesource.com/',
          image: require('~/assets/images/node-source.png'),
          maxHeight: '350px'
        }
      ]
    }
  }
}
</script>
