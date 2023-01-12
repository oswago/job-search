<template>
  <ul>
    <li v-for="spotLight in spotLights" :key="spotLight.id">
      <slot
        :img="spotLight.img"
        :title="spotLight.title"
        :description="spotLight.description"
      >
      </slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const spotLights = ref([]);

const getSpotlights = async () => {
  const base = "http://localhost:3000";
  const url = `${base}/spotlights`;
  const response = await axios.get(url);
  spotLights.value = response.data;
};
onMounted(getSpotlights);
</script>
