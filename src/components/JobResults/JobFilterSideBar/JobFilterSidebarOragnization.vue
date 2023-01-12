<template>
  <collapsible-acordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col flex_wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="h-8 w-full"
          >
            <input
              :id="organization"
              v-model="selectedOrganization"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-acordion>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
//import { mapState, mapActions } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";
import CollapsibleAcordion from "@/components/Shared/CollapsibleAcordion.vue";

const selectedOrganization = ref([]);

const userStore = useUserStore();
const router = useRouter();
const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganization.value);
  router.push({ name: "JobResults" });
};

const jobStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobStore.UNIQUE_ORGANIZATIONS);
// export default {
//   name: "JobFilterSidebarOrganization",
//   components: {
//     CollapsibleAcordion,
//   },
//   data() {
//     return {
//       selectedOrganization: [],
//     };
//   },
//   computed: {
//     ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
//   },
//   methods: {
//     ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
//     selectOrganization() {
//       this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganization);
//       this.$router.push({ name: "JobResults" });
//     },
//   },
// };
</script>
