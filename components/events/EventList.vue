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
          link: 'https://ti.to/ibaguejs/directivas-angular-react-expresion',
          name: 'Directivas en Angular + React en su mínima expresión',
          description: `<div>
  <div class="text-xs-center">
    <img
      alt=""
      class="event-logo img-responsive"
      src="https://d2z6c3c3r6k4bx.cloudfront.net/uploads/event/logo/1087383/d4a47f6ff68c5281b1537107291f5de7.png"
    />
  </div>
  <div>
    <h3>🗣️ Directivas en Angular - Juan Suarez</h3>
    <p>
      En esta charla veremos qué son y cómo funcionan las directivas en Angular.
    </p>
    <h3>🗣️ React en su mínima expresión - Yeison Tapia</h3>
    <p>
      En esta charla vamos a entender React a partir de funciones básicas de
      JavaScript, veremos que no siempre necesitamos un acoplamiento de varios
      módulos para comenzar a aprender o desarrollar en esta tecnología.
    </p>
    <h3>📅 Información sobre la programación.</h3>
    <ul>
      <li>[ 10:00-10:15 ] Llegada asistentes + Networking.<br /></li>
      <li>[ 10:15-11:00 ] Charla 1 + Preguntas.<br /></li>
      <li>[ 11:00-11:15 ] Refrigerio + Networking.<br /></li>
      <li>[ 11:15-12:00 ] Charla 2 + Preguntas.<br /></li>
    </ul>
    <h3>⚠️ Notas/Avisos:</h3>
    <ul>
      <li>Cada charla es de 30 minutos con 15 minutos para preguntas.</li>
      <li>
        Quienes lleven equipos electrónicos personales deben prestar mucha
        atención al cuidado de sus pertenencias. Cada persona es responsable del
        cuidado y de mantener sus pertenencias seguras.
      </li>
    </ul>
    <br>
    <div class="text-xs-center"><em>ANÍMATE TE ESPERAMOS!!!</em></div>
  </div>
</div>
`,
          venue: {
            name: 'Boom Auditorio Stand-up | Carrera 5 # 43-182 · Ibagué'
          },
          local_date: '2019-12-14',
          local_time: '2:00 pm',
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
