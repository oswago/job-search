<template>
  <div>
    <main-nav />
    <hero-sec />
  </div>
</template>

<script>
import MainNav from "@/components/Nav/MainNav.vue";
import HeroSec from "@/components/Hero.vue";
export default {
  name: "App",
  components: {
    MainNav,
    HeroSec,
  },
};
</script>
