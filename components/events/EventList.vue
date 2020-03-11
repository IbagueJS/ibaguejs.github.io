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
          link: 'https://ti.to/ibaguejs/javascript-workshop-3',
          name: 'JavaScript Workshop #3',
          description: `<div>
  <div class="text-xs-center">
    <img 
      alt=""
      class="event-logo img-responsive"
      style="max-width: 100%; height: auto; width: 360px;"
      src="https://d2z6c3c3r6k4bx.cloudfront.net/uploads/event/logo/1091174/75b37f0cb4d0a6fb23c2c2167daa7dd6.png">
  </div>
  <div>
    <p>💻 Manos a la Obra</p>
    <p>
      Si quieres ser un/una JavaScript Developer pero no sabes por dónde empezar,
      este espacio te ayudará a comenzar. Este taller cubre los aspectos más
      importantes de JavaScript.
    </p>
    <p>
      Esta serie de Workshops de JavaScript tendrán Seis sesiones, en esta tercera
      ocasión conoceremos sobre:
    </p>
    <ul>
      <li>Number</li>
      <li>Object</li>
      <li>Map</li>
      <li>Set</li>
    </ul>
    <p>🎯 Audiencia Objetivo</p>
    <p>
      Personas con interés en aprender a programar en JavaScript, sin importar si
      no tienen experiencia previa con un lenguaje de programación.
    </p>
    <p>📅 Información sobre la programación.</p>
    <ul>
      <li>
        [ 10:00 ] Bienvenida @IbagueJS.
      </li>
      <li>[ 10:00-10:15 ] Llegada asistentes + Networking.</li>
      <li>[ 10:15-11:45 ] Workshop!</li>
      <li>[ 11:45-12:00 ] Refrigerio + Networking.</li>
    </ul>
    <p>
      Los esperamos el próximo sábado 14 de Marzo desde las 10:00 a.m, en la Nave
      4, Ambiente 4204 del SENA Centro de Industria y de la Construcción Sede
      Picaleña.
    </p>
    <p>🤔 Que no se nos olvide:</p>
    <ul>
      <li>Computador</li>
      <li>Editor de preferencia</li>
    </ul>
    <p>⚠️ Notas/Avisos:</p>
    <ul>
      <li>
        Quienes lleven equipos electrónicos personales deben prestar mucha
        atención al cuidado de sus pertenencias. Cada persona es responsable del
        cuidado y de mantener sus pertenencias seguras.
      </li>
    </ul>
    <br>
    <p>¡¡¡ANÍMATE TE ESPERAMOS!!!</p>
  </div>

</div>
`,
          venue: {
            name: 'SENA Sede Picaleña'
          },
          local_date: '2020-03-14',
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
