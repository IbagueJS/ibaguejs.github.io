<template lang="pug">
    .events.pb-3
        v-container.text-xs-center(grid-list-md)
            v-layout(row, wrap, justify-center)
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
export default {

}
</script>

<style>

</style>