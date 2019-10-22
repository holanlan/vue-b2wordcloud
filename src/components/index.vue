<template>
<div class="vue-wordcloud">
    <vue-wordcloud-view :options="options" v-if="!loading"></vue-wordcloud-view>
    <Vue-wordcloud-loading v-if="loading"></Vue-wordcloud-loading>
</div>
</template>
<script>
import VueWordcloudView from './VueWordcloudView.vue'
import VueWordcloudLoading from './VueWordcloudLoading.vue'
export default {
    name: 'vue-wordcloud',
    components: {
        VueWordcloudView,
        VueWordcloudLoading
    },
    props: {
        options: {
            type: Object,
            default: function() {
                return {}
            }
        },
        loading: {
            type: Boolean,
            default: function() {
                return false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.vue-wordcloud {
    position: relative;
}
</style>