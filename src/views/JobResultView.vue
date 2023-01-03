<template>
  <div class="flex w-full flex-row flex-nowrap">
    <job-filter-side-bar />
    <job-listing />
  </div>
</template>

<script>
import JobFilterSideBar from "@/components/JobResults/JobFilterSideBar/JobFilterSideBar.vue";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobResultView",
  components: {
    JobFilterSideBar,
    JobListing,
  },
};
</script>
