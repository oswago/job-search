<template>
  <collapsible-acordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col flex_wrap">
          <li v-for="value in uniqueValues" :key="value" class="h-8 w-full">
            <input
              :id="jobType"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-acordion>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import CollapsibleAcordion from "@/components/Shared/CollapsibleAcordion.vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  uniqueValues: {
    type: Set,
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
});
const selectedValues = ref([]);

const router = useRouter();

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({ name: "JobResults" });
};
</script>
