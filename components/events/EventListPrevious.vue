<template lang="pug">
  div
    v-layout(row, wrap, align-center, class="pa-3 text-xs-left")
      v-flex(xs12, sm10, offset-sm1)
        h4.title.ml-1.mb-2 
          EventModal(:event="event")
        v-chip(label, small, color="primary", text-color="white")
          v-avatar
            v-icon(size="14px") fas fa-calendar-day
          | {{ event.year | date }}
          
    v-divider
</template>

<script>
import moment from 'moment'
import EventModal from '@/components/events/EventModal.vue'
export default {
  components:{
    EventModal
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  created(){
    
  },
  filters:{
    date (date){
      return moment(date).format("dddd, MMMM Do YYYY")
    },
    dateFromNow (date) {
      return moment(date).fromNow()
    }
  }
}
</script>

<style scoped>
  .text-white{
    color: white
  }
</style>
