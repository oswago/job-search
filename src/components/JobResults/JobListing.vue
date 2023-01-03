<template>
  <main class="flex-auto bg-brand-grey-2 p-8">
    <ol>
      <jobs-list />
      <jobs-list />
      <jobs-list />
    </ol>
  </main>
</template>

<script>
import JobsList from "@/components/JobResults/JobsList.vue";
export default {
  name: "JobListing",
  components: {
    JobsList,
  },
};
</script>
