<template>
<div class="vue-wordcloud-loading" :style="{backgroundColor: backgroundColor}">
    <div class="loader">
        <div class="loading-spinner">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" :stroke="color"/>
            </svg>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default: function() {
                return '#20a0ff'
            }
        },
        backgroundColor: {
            default: function() {
                return 'rgba(255, 255, 255, .9)'
            }
        }
    }
}
</script>
<style lang="less">
.vue-wordcloud-loading {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .circular {
        width: 42px;
        height: 42px;
        animation: loading-rotate 2s linear infinite;
    }

    .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        // stroke: #20a0ff;
        stroke-linecap: round;
    }

    @keyframes loading-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes loading-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -40px;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -120px;
        }
    }
}

</style>