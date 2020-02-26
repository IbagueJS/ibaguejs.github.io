<template>
  <div justify="center">
    <span  @click.stop="dialog = true" style="cursor:pointer">
          {{event.title}}
    </span>
    <v-dialog
      v-model="dialog"
      width="80%"
    >
      <v-card>
        <v-card-text>
             <client-only>
               <EventInfo :event="event"/>
            </client-only>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import EventInfo from '@/components/events/EventInfo.vue'
 export default {
   components:{
    EventInfo
   },
    props:{
        event:{
            type: Object,
            default: () => {}
        }
    },
    data () {
      return {
        dialog: false,
        
      }
    },
    mounted(){
        this.$nextTick(() => {
            
        })
    },
    methods:{
       
    }
  }
</script>

<style>

</style>