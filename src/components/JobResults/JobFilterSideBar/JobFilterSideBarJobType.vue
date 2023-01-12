<template>
  <collapsible-acordion header="Job Type">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col flex_wrap">
          <li
            v-for="jobType in UNIQUE_JOBS_TYPES"
            :key="jobType"
            class="h-8 w-full"
          >
            <input
              :id="jobType"
              v-model="selectedJobType"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-acordion>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
//import { mapState, mapActions } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import CollapsibleAcordion from "@/components/Shared/CollapsibleAcordion.vue";

const selectedJobType = ref([]);

const userStore = useUserStore();
const router = useRouter();
const selectJobType = () => {
  userStore.ADD_SELECTED_JOB_TYPES(selectedJobType.value);
  router.push({ name: "JobResults" });
};

const jobStore = useJobsStore();
const UNIQUE_JOBS_TYPES = computed(() => jobStore.UNIQUE_JOBS_TYPES);

// export default {
//   name: "JobFilterSidebarJobType",
//   components: {
//     CollapsibleAcordion,
//   },
//   data() {
//     return {
//       selectedJobType: [],
//     };
//   },
//   computed: {
//     ...mapState(useJobsStore, [UNIQUE_JOBS_TYPES]),
//   },
//   methods: {
//     ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
//     selectJobType() {
//       this.ADD_SELECTED_JOB_TYPES(this.selectedJobType);
//       this.$router.push({ name: "JobResults" });
//     },
//   },
// };
</script>
