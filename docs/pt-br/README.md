---
home: false
sidebarDepth: 3
sidebar: auto
---

# v-stylish

Diretivas Vue.js para faciliar a manipulação dinâmica de classes e estilo

## Por que v-stylish?

As vezes eu não quero criar um objeto para definir uma classe ou estilo dinâmico em um elemento.
Então eu trouxe essa funcionalidade do [Angular](https://angular.io/guide/template-syntax#binding-targets)


## Instalação

```
npm install --save v-stylish
```

### Instalando como Plugin

```js
import Vue from 'vue';
import vStylish from 'v-stylish';

Vue.use(vStylish);
```

### Instalando manualmente
```js
import Vue from 'vue';
import { vClass, vStyle } from 'v-stylish';
  
Vue.directive(vClass.name, vClass);
Vue.directive(vStyle.name, vStyle);
```

## Como usar

### v-class
Para alternar uma única classe em um elemento você precisa apenas usar a diretiva:  
`v-class:sua-class="Boolean"`.  

A classe será definida da maneira como foi escrita.


#### Example
---

<v-class-demo />

#### Source
---

<<<@/docs/.vuepress/components/vClassDemo.vue

### v-style

Para definir um único atributo de estilo em um elemento você precisa apenas usar a diretiva:  
`v-style:atributo.sufixo="Number | String"`.  

Você pode escrever o atributo como CammelCase ou kebab-case: `fontWeight` ou `font-weight`.   

Se necessário você pode atribuir um sufixo para o valor como um modificador de diretiva, exemplo:
`v-style:padding.px="14"` irá definir o valor `14px` ao padding do elemento  
`v-style:padding.%="14"` irá definir o valor `14%` ao padding do elemento

#### Example
---

<v-style-demo />

#### Source
---

<<<@/docs/.vuepress/components/vStyleDemo.vue
