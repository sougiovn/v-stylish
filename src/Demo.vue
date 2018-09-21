<template>
  <div>
    <h1 v-class:is-blue="isBlue">
      v-class:is-blue
    </h1>

    <label>Color:</label>
    <button
      id="toggleButton"
      type="button"
      @click="toggle">
      Toggle blue color
    </button>

    <hr />

    <h1 v-style:backgroundColor="backgroundColor">
      v-style:backgroundColor
    </h1>
    <h1 v-style:background-color="backgroundColor">
      v-style:background-color
    </h1>

    <label>Background Color:</label>
    <input
      type="text"
      v-model="backgroundColor" />

    <hr />

    <h1 class="vstyle-modifier" v-style:padding.px="padding">
      v-style:padding.px
    </h1>
    <h1 class="vstyle-modifier" v-style:padding.%="padding">
      v-style:padding.%
    </h1>

    <label>Padding(px):</label>
    <input
      type="text"
      v-model="padding" />
  </div>
</template>

<script>
  import VClass from './VClass';
  import VStyle from './VStyle';

  export default {
    name: 'Demo',
    directives: {
      'class': VClass,
      'style': VStyle
    },
    data() {
      return {
        isBlue: false,
        backgroundColor: 'red',
        padding: 0
      };
    },
    methods: {
      toggle() {
        this.isBlue = !this.isBlue;
      }
    }
  };
</script>

<style scoped>
  .is-blue {
    color: blue;
  }
  .vstyle-modifier {
    border: 1px solid black;
  }
</style>