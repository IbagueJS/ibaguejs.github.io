<template>
  <div>
    <EventInfo v-for="(event, index) in events" :key="index" :event="event"/>
  </div>
</template>

<script>
import EventInfo from '@/components/events/EventInfo.vue'
export default {
  components:{EventInfo},
  props:{
    events:{
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>