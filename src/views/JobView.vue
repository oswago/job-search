<template>
  <div>Job Page id is {{ currentJobId }}</div>
  <div></div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>
