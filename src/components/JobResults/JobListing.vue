<template>
  <main class="flex-auto bg-brand-grey-2 p-8">
    <ol>
      <jobs-list v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="max-3 text-sm font-semibold text-brand-blue-1 mr-8"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="max-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import JobsList from "@/components/JobResults/JobsList.vue";

import {
  useJobsStore,
  //FETCH_JOBS,
  // eslint-disable-next-line no-unused-vars
  // FILTERED_JOBS_BY_ORGANIZATION,
  // eslint-disable-next-line no-unused-vars
  // FILTERD_JOBS_BY_JOB_TYPES,
  // eslint-disable-next-line no-unused-vars
  // FILTERED_JOBS,
} from "@/stores/jobs";

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

const jobStore = useJobsStore();
onMounted(jobStore.FETCH_JOBS);

const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || "1"));
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10));
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);
// const previousPage = computed(() => {
//   const previousPage = currentPage.value - 1;
//   const firstPage = 1;
//   return previousPage >= firstPage ? previousPage : undefined;
// });

// const nextPage = computed(() => {
//   const nextPage = currentPage.value + 1;
//   const maxPage = FILTERED_JOBS.value.length / 10;
//   return nextPage <= maxPage ? nextPage : undefined;
// });

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});

// export default {
//   name: "JobListing",
//   components: {
//     JobsList,
//   },
//   data() {
//     return {
//       pageNum: 1,
//     };
//   },
//   computed: {
//     currentPage() {
//       return Number.parseInt(this.$route.query.page || "1");
//     },
//     previousPage() {
//       const previousPage = this.currentPage - 1;
//       const firstPage = 1;
//       return previousPage >= firstPage ? previousPage : undefined;
//     },

//     ...mapState(useJobsStore, {
//       FILTERED_JOBS,
//       nextPage() {
//         const nextPage = this.currentPage + 1;
//         const maxPage = this.FILTERED_JOBS.length / 10;
//         return nextPage <= maxPage ? nextPage : undefined;
//       },
//       displayedJobs() {
//         const pageNumber = this.currentPage;
//         const firstJobIndex = (pageNumber - 1) * 10;
//         const lastJobIndex = pageNumber * 10;
//         return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
//       },
//     }),
//   },
//   async mounted() {
//     this.FETCH_JOBS();
//   },
//   methods: {
//     ...mapActions(useJobsStore, [FETCH_JOBS]),
//   },
// };
</script>
