<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-grey-1">
    <div class="flex items-center h-full px-8">
      <div>
        <div v-if="onJobResultsPage" data-test="job-count">
          <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
          <span>
            <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
            jobs matched
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
//import { mapState } from "pinia";
import { useJobsStore } from "@/stores/jobs";

const route = useRoute();
const onJobResultsPage = computed(() => route.name === "JobResults");

const jobStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
</script>
