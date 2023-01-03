<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="place"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "TextInput",
  props: {
    place: {
      type: String,
      default: "Type in....",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
