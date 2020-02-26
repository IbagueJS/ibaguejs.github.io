<template lang="pug">
  .ibg-landing
    the-header(
      :paddingHeader="paddingHeader"
      :paddingContainer="paddingContainer"
      :paddingLayout="paddingLayout"
      :paddingFlex="paddingFlex"
    )
    .ibg-landing-container      
      EventList(:events="events")
      LandingPR
      TheAbout
      LandingOrganizers
      LandingSponsors
      LandingSupports
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import blogsEn from '~/contents/en/blogsEn.js'
import blogsEs from '~/contents/es/blogsEs.js'
import TheHeader from '~/components/layout/TheHeader.vue'
import EventList from '~/components/events/EventList.vue'
import LandingPR from '~/components/landing/LandingPR.vue'
import TheAbout from '~/components/layout/TheAbout.vue'
import LandingOrganizers from '~/components/landing/LandingOrganizers.vue'
import LandingSponsors from '~/components/landing/LandingSponsors.vue'
import LandingSupports from '~/components/landing/LandingSupports.vue'


export default {
  async asyncData ({app}) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs
    
    async function asyncImport (blogName) {
      const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
      return wholeMD.attributes
    }
    return Promise.all(blogs.map(blog => asyncImport(blog)))
    .then((res) => {
      return {
        events: res.reverse()
      }
    })
  },
  components: {
    BlogSection,
    TheHeader,
    EventList,
    LandingPR,
    TheAbout,
    LandingOrganizers,
    LandingSponsors,
    LandingSupports,
    
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
