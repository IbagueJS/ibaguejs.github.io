<template>
  <div>
    <tito-widget :event="event" >
    </tito-widget>
  </div>
</template>

<script>
  export default {
    props:{
      event: {
        type: String,
        required: true,
      }
    }
  }
</script>