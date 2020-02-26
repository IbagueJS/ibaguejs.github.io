<template lang="pug">
  .events.pb-3
    v-container(grid-list-md)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          h2.display-1 
            .text-xs-center Eventos
        v-flex(xs12)
          v-tabs.mt-3(
            v-model="active",
            centered,
            color="dark",
            dark,
            slider-color="#ffe400"
          )
            v-tab(
              v-for="tab in tabs",
              :key="tab.id",
              ripple
            ) 
              h3.subheading {{ tab.name }}
            v-tab-item(
              v-for="tab in tabs",
              :key="tab.id"
            )
              v-card(flat)
                v-card-text(v-if="tab.id == 1")
                  .upcoming(v-if="upcomingEvents.length")
                    EventListUpcoming(:events="upcomingEvents")

                  v-layout(v-else, row, wrap, align-center, class="pa-3 text-xs-center")
                    v-flex(xs12)
                      .headline.font-weight-bold.pb-3 No hay próximos eventos programados 💔
                v-card-text(v-else)
                  .previous.pb-3
                    event-list-previous(
                      v-for="event in events",
                      :key="event.name",
                      :event="event"
                    )
        
</template>

<script>
import moment from 'moment'
import EventListUpcoming from '@/components/events/EventListUpcoming.vue'
import EventListPrevious from '@/components/events/EventListPrevious.vue'

export default {
  props:{
    events: {
      type: Array,
      default: () => []
    }
  },
  components: {
    EventListUpcoming,
    EventListPrevious
  },
  computed:{
    upcomingEvents () {
      let now = moment(new Date()).subtract(1, 'days')
      return this.events.filter( event => {
        return moment(now).isBefore(event.year) 
      })
    }
  },
  data() {
    return {
      active: 0,
      tabs: [
        { id: 1, icon: '', name: 'Próximos' },
        { id: 2, icon: '', name: 'Pasados' }
      ],
    }
  },
  created() {

  },
  methods: {

  }
}
</script>
