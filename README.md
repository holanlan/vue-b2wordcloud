# vue-b2wordcloud

[![NPM](https://nodei.co/npm/vue-b2wordcloud.png)](https://nodei.co/npm/vue-b2wordcloud/)

基于[b2wordcloud](https://github.com/holanlan/b2wordcloud)进行封装的vue词云图组件

线上例子见：[DEMO](https://holanlan.github.io/vue-b2wordcloud/)

## Installtion
- 通过script引入
```
<script src="dist/vue-b2wordcloud.min.js"></script>
```

- 通过npm安装
```
npm install vue-b2wordcloud --save
```

## Usage

添加插件到你的`main.js`文件
```javascript
import Vue from 'vue'
import VueWordcloud from 'vue-b2wordcloud'
Vue.use(VueWordcloud)
```

例子：
```html

<template>
    <div id="app">
        <vue-wordcloud 
            style="width: 500px;height: 500px;"
            :options="options" 
            :loading="loading" />
    </div>
</template>

<script>
export default {
    data: function() {
        return { 
            loading: true,
            options: {
                list: [
                    ['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46],['foo', 36], ['bar', 62], ['foo3', 22], ['bar4', 36], ['bar5', 46]
                ],
                color: [
                    ['blue', 'white']
                ]
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
}
</script>
```

## API documentation

- `options`：词云图配置项，详细见：[b2wordcloud options配置](https://github.com/holanlan/b2wordcloud)
- `loading`：显示加载状态

## Resize

组件内置监听DOM resize（基于[element-resize-detector](https://github.com/wnr/element-resize-detector)）调用词云图重绘方法，

