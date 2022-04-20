<template>
  <h1>{{ heroTitle }}</h1>
  <p>{{ heroDetails }}</p>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroTitle: "This is the best hero in town",
      heroDetails: "World best Wrestler from Cameroon",
    };
  }
};
</script>

<style scoped>
</style>