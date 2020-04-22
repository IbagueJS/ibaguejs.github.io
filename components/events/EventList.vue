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
          link: 'https://www.twitch.tv/ibaguejs',
          name: 'Meetup de Abril!',
          description: `<div>
  <div class="text-xs-center">
    <img
      alt=""
      class="event-logo img-responsive"
      style="max-width: 100%; height: auto; width: 360px;"
      src="https://secure.meetupstatic.com/photos/event/2/3/f/4/highres_490209204.jpeg">
  </div>
  <div>
    <p>
      Este mes tendremos dos temas interesantes de conocer en el mundo JavaScript,
      un nuevo Framework que quiere revolucionar el mundo front-end como lo es Svelte y
      una herramienta para hacer pruebas Unitarias llamada Mocha.
    </p>
    <p>
      🎙️ Svelte - Oscar Barajas @gndx
    </p>
    <p>
      🎙️ Pruebas unitarias con Mocha - Pablo Dorado @pandres95
    </p>
    <p>📅 Información sobre la programación.</p>
    <ul>
      <li>[ 10:00 - 10:15 ] Bienvenida @IbagueJS.</li>
      <li>[ 10:15 - 11:00 ] Svelte</li>
      <li>[ 11:00 - 11:45 ] Pruebas unitarias con Mocha</li>
      <li>[ 11:45 - 12:00 ] Preguntas.</li>
    </ul>
    <p></p>
    <p>
      Los esperamos el próximo sábado 25 de Abril desde las 10:00 a.m, en nuestro
      canal de Twitch, búscanos como @ibaguejs.
    </p>
    <p>⚠️ Notas/Avisos:</p>
    <p>
      Recuerden hacer todas las preguntas que tengan, y que nunca hay una pregunta
      que no sea digna de realizarse, así como la respuesta te puede ayudar a tí,
      lo puede hacer a muchos otros. También recuerda llevar un trato amable en
      el chat tanto hacia los speakers como con los demás participantes.
    </p>
    <br>
    <p>¡¡ANÍMATE TE ESPERAMOS!!</p>
  </div>

</div>
`,
          venue: {
            name: 'Twitch - @ibaguejs'
          },
          local_date: '2020-04-25',
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
