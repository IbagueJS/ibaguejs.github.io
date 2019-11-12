<template lang="pug">
  .events.pb-3
    v-container.text-xs-center(grid-list-md)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          h2.display-1 Eventos
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
                    event-list-upcoming(
                      v-for="event in upcomingEvents",
                      :key="event.created",
                      :event="event"
                    )
                  v-layout(v-else, row, wrap, align-center, class="pa-3 text-xs-center")
                    v-flex(xs12)
                      .headline.font-weight-bold.pb-3 No hay próximos eventos programados 💔
                v-card-text(v-else)
                  .previous.pb-3
                    event-list-previous(
                      v-for="event in previousEvents",
                      :key="event.created",
                      :event="event"
                    )
        v-flex(xs12)
          v-card(flat, class="has-background-js-primary mt-3")
            v-card-text(class="pa-3 text-xs-center")
              h5.subheading.font-weight-medium
                | ¿Quieres proponer/exponer una charla? Abre un issue en nuestro
                | repositorio de 
                a(href="https://github.com/IbagueJS/charlas", class="teal--text text--accent-4") Github 
                | con tu propuesta.
</template>

<script>
import EventListUpcoming from '@/components/events/EventListUpcoming.vue'
import EventListPrevious from '@/components/events/EventListPrevious.vue'

import MeetupService from '@/services/MeetupService'

export default {
  components: {
    EventListUpcoming,
    EventListPrevious
  },
  data() {
    return {
      active: 0,
      tabs: [
        { id: 1, icon: '', name: 'Próximos' },
        { id: 2, icon: '', name: 'Pasados' }
      ],
      page: 5,
      upcomingEvents: [
        {
          link: 'https://ti.to/ibaguejs/nodeschool-en-ibaguejs/registrations',
          name: 'NodeSchool #1',
          description: `<div class="text-xs-center">
  <img alt="" class="event-logo img-responsive" src="https://d2z6c3c3r6k4bx.cloudfront.net/uploads/event/logo/1083533/f46da0c47167fd129cbe8494e318fc3d.png">
  <div class="event-description markdown">
    <p>¿Quieres aprender a programar pero no sabes por dónde empezar? ¿O tal vez ya codificas y deseas aprender más de JavaScript y Node ?</p>
    <p>Ven y únete a <strong>NodeSchool</strong> organizado por <strong>IbagueJS</strong>, una iniciativa de comunidad que busca enseñar JavaScript y Node.js, a través de talleres presenciales utilizando workshoppers (talleres interactivos) como material de aprendizaje y contando con el acompañamiento de mentores.</p>
    <p>No olvidar:
    - Computador
    - Tener instalado nodejs
    - Tener instalado npm
    - Editor de preferencia
    - Cuenta en github.com</p>
    <p><em>ANÍMATE TE ESPERAMOS!!</em></p>
  </div>
</div>`,
          venue: {
            name: 'Boom Auditorio Stand-up | Carrera 5 # 43-182 · Ibagué'
          },
          local_date: '2019-11-23',
          local_time: '10:00 am',
          yes_rsvp_count: null
        }
      ],
      previousEvents: []
    }
  },
  created() {
    this.$nextTick(() => {
      // this.getUpcomingEvents()
      this.getPastEvents()
    })
  },
  methods: {
    // getUpcomingEvents() {
    //   MeetupService.getEvents(this.page, 'upcoming').then(
    //     res => (this.upcomingEvents = res.data)
    //   )
    // },
    getPastEvents() {
      MeetupService.getEvents(this.page, 'past').then(
        res => (this.previousEvents = res.data)
      )
    }
  }
}
</script>
