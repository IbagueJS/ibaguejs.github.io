<template lang="pug">
  .supports
    v-container.text-xs-center(grid-list-md)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          h2.display-1.mb-5 Apoyan
        v-flex(
          xs4,
          :class="{'px-2': $vuetify.breakpoint.smAndDown}"
          v-for="support in supports"
          :key="support.id"
        )
          a(:href="support.page", target="_blank")
            v-img(
              height="auto",
              width="100%",
              :max-height="support.maxHeight"
              :src="support.image"
              aspect-ratio="2",
              contain
            )
</template>

<script>
export default {
  data() {
    return {
      supports: [
        {
          id: 1,
          page: 'http://www.sti.org.co/',
          image: require('~/assets/images/sti.png'),
          maxHeight: '186px'
        },
        {
          id: 2,
          page: 'https://colombia-dev.org',
          image: require('~/assets/images/colombia-dev.svg'),
          maxHeight: '250px'
        },
        {
          id: 3,
          page: 'https://www.ucc.edu.co/ibague/Paginas/inicio.aspx',
          image: require('~/assets/images/ucc.png'),
          maxHeight: '200px'
        },
        {
          id: 4,
          page: 'https://www.colmakers.com/',
          image: require('~/assets/images/colmakers.png'),
          maxHeight: '250px'
        },
        {
          id: 5,
          page: 'https://sundevs.com/',
          image: require('~/assets/images/sun-devs.png'),
          maxHeight: '180px'
        }
      ]
    }
  }
}
</script>
