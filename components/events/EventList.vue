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
          link: 'https://ti.to/ibaguejs/primer-aniversario-ibaguejs',
          name: 'Primer Aniversario IbaguéJS',
          description: `<div>
  <div>
    <p>🎉 ¡ Estamos de cumpleaños ! 🎊</p>
    <p>Queremos celebrar con toda nuestra comunidad este grandioso año, que ha estado lleno de conocimiento y oportunidades, sin ustedes, quienes asisten a cada evento o taller no estaríamos aquí, ni motivados de continuar impulsando JavaScript y las comunidades en Ibagué!</p>
    <p>Ven el próximo Sábado 29 de Febrero desde las 10:00 AM, en el Auditorio BOOM en la Carrera 5 # 43 - 147, y celebra con nosotros.</p>
    <ul>
      <li>Bienvenida Equipo @IbagueJS.</li>
      <li>Actividades Sorpresa 💙</li>
      <li>Networking Time 🍔</li>
    </ul>
  </div>
</div>
`,
          venue: {
            name: 'Auditorio BOOM Ibagué'
          },
          local_date: '2020-02-29',
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
