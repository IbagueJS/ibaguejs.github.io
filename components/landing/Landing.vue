<template lang="pug">
  .ibg-landing-content
    event-list
    the-about
    landing-organizers
    landing-sponsors
    landing-supports
</template>

<script>
import EventList from '~/components/events/EventList.vue'
import TheAbout from '~/components/layout/TheAbout.vue'
import LandingOrganizers from '~/components/landing/LandingOrganizers.vue'
import LandingSponsors from '~/components/landing/LandingSponsors.vue'
import LandingSupports from '~/components/landing/LandingSupports.vue'

export default {
  name: 'Landing',
  components: {
    EventList,
    TheAbout,
    LandingOrganizers,
    LandingSponsors,
    LandingSupports
  }
}
</script>
