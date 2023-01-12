<template>
  <diV class="border-b border-solid border-brand-grey-2 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      @click="open"
    >
      <h3>{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>Somebody Forgort to Populate me</p>
      </slot>
    </div>
  </diV>
</template>

<script setup>
import { computed, ref } from "vue";
// eslint-disable-next-line no-undef
defineProps({
  header: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() =>
  isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
);
</script>
