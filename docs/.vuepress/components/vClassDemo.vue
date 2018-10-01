<template>
  <div>
    <button type="button" @click="isBlue = !isBlue">toggle</button>

    <p v-class:is-blue="isBlue">
      is-blue class is {{ isBlue ? 'active' : 'inactive' }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vClassDemo',
    data() {
      return {
        isBlue: false
      };
    }
  };
</script>

<style scoped>
  .is-blue {
    background-color: darkblue;
    color: lightblue;
  }
</style>
