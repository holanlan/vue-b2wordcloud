<template>
    <div class="vue-wordcloud-view"></div>
</template>
<script>
import Wordcloud from 'b2wordcloud'
import elementResizeDetectorMaker from 'element-resize-detector'
const erd = elementResizeDetectorMaker()
export default {
    name: 'vue-wordcloud',
    data() {
        return {
            wc: null
        }
    },
    props: {
        options: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.wc = new Wordcloud(this.$el, this.options)
            erd.listenTo(this.$el, () => {
                this.wc.resize()
            })
        }
    },
    watch: {
        options: {
            deep: true,
            handler() {
                this.init()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.vue-wordcloud-view {
    width: 100%;
    height: 100%
}
</style>