<template>
  <main-nav />
  <div>
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/Nav/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
