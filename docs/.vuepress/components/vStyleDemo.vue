<template>
  <div>
    <label>Font-weight:</label><input v-model="fontWeight" />
    <p v-style:fontWeight="fontWeight">
      font-weight: {{ fontWeight }}
    </p>
    <hr />
    <label>Padding:</label><input v-model="padding" />
    <div
      class="square"
      v-style:padding.px="padding">
      Padding {{ padding }}px
    </div>
    <br />
    <div
      class="square"
      v-style:padding.%="padding">
      Padding {{ padding }}%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vStyleDemo',
    data() {
      return {
        padding: 0,
        fontWeight: 400
      };
    }
  };
</script>

<style scoped>
  .square {
    border: 1px solid black;
  }
</style>
