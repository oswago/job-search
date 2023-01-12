<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-grey-3 rounded-3xl"
    @submit.prevent="searchForjobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input id="role" v-model="role" place="software engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border bordr-l border-r border-brand-grey-3 bg-brand-grey-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 hfull pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <text-input id="location" v-model="location" place="Los Angeles" />
      </div>
    </div>
    <action-button
      text="search"
      type="secondary"
      class="h-full rounded-r-3xl"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

const role = ref("");
const location = ref("");

const router = useRouter();

const searchForjobs = () => {
  router.push({
    name: "JobResults",
    query: {
      role: role.value,
      location: location.value,
    },
  });
};
</script>
