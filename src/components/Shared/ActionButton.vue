<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { computed, toRefs } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const { type } = toRefs(props);

const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>
<style scoped>
button {
  @apply px-5 font-medium;
}
.primary {
  @apply text-white rounded bg-brand-blue-1  hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
