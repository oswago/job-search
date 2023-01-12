<template>
  <div
    class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <collapsible-acordion header="Location"></collapsible-acordion>

      <job-filter-side-bar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOBS_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <!--<job-filter-side-bar-job-type />-->

      <job-filter-side-bar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATION"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
      <!--<job-filter-sidebar-oragnization />-->
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAcordion from "@/components/Shared/CollapsibleAcordion.vue";
//import JobFilterSidebarOragnization from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarOragnization.vue";
//import JobFilterSideBarJobType from "@/components/JobResults/JobFilterSideBar/JobFilterSideBarJobType.vue";
import JobFilterSideBarCheckboxGroup from "@/components/JobResults/JobFilterSideBar/JobFilterSideBarCheckboxGroup.vue";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

const jobStore = useJobsStore();

const UNIQUE_JOBS_TYPES = computed(() => jobStore.UNIQUE_JOBS_TYPES);
const UNIQUE_ORGANIZATION = computed(() => jobStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
</script>
