---
home: false
sidebarDepth: 3
---

# v-stylish

Vue.js directives to easly manipulate dynamic classes and styles

## Why v-stylish?

Some times I just don't want to create an object to set a dynamic class or style to an element.
So I brought this feature from [Angular](https://angular.io/guide/template-syntax#binding-targets)

## Instalation

```
npm install --save v-stylish
```

### Installing as Plugin

```js
import Vue from 'vue';
import vStylish from 'v-stylish';

Vue.use(vStylish);
```

### Installing manually

```js
import Vue from 'vue';
import { vClass, vStyle } from 'v-stylish';
  
Vue.directive(vClass.name, vClass);
Vue.directive(vStyle.name, vStyle);
```

## How to use it

### v-class

To toggle a single class into an element you just need to use the directive:    
`v-class:your-class="Boolean"`.  

The class will be set as written in the directive.


#### Example
---

<v-class-demo />

#### Source
---

<<<@/docs/.vuepress/components/vClassDemo.vue

### v-style

To set a single style attribute into an element you just need to use the directive:    
`v-style:attribute.suffix="Number | String"`.  

You may write the style attribute as CammelCase or kebab-case: `fontWeight` or `font-weight`.  

If necessary you may set a suffix to the value as a directive modifier, example:  
`v-style:padding.px="14"` will set the value `14px` to the element padding  
`v-style:padding.%="14"` will set the value `14%` to the element padding

#### Example
---

<v-style-demo />

#### Source
---

<<<@/docs/.vuepress/components/vStyleDemo.vue
