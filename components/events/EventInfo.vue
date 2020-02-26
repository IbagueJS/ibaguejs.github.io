<template>
  <div v-if="blog">
      <DynamicMarkdown
        :render-func="`(${blog.vue.render})`"
        :static-render-funcs="`[${blog.vue.staticRenderFns}]`"
        :extra-component="blog.attributes.extraComponent" />
        <titoComponent :event="blog.attributes.titoId" v-if="titoLoaded" />
  </div>
</template>

<script>
import titoComponent from "~/components/titoComponent.vue"
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
export default {
    components: { DynamicMarkdown, titoComponent},
    props:{
        event:{
            type: Object,
            default: () => {},
            required: true
        }
    },
    data (){
        return {
            blog: false,
            titoLoaded: false,
        }
    },
    head() {
        return {
            script: [
                { 
                    src: 'https://js.tito.io/v1', 
                    async: true,
                    callback: () => { 
                        this.titoLoaded = true
                    }
                }
            ],
            link: [
                {
                rel: 'stylesheet',
                href: 'https://css.tito.io/v1.1'
                }
            ]
        }
    },
    created(){
        this.$nextTick(() => {
            this.getData()
            
        })
    },
    methods:{
        async getData(){
            const fileContent = await import(`~/contents/es/blog/${this.event.name}.md`)
            const attr = fileContent.attributes
            this.blog = fileContent
        }
    }
}
</script>

<style lang="scss">
.tito-wrapper {
  background-color: white;
}
</style>
