<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
        >
          {{ company }}
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              data-test="main-nav-list-item"
              class="flex h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image
            v-if="isLoggedIn"
            class="items-center"
            data-test="profile-image"
            @click="logOut"
          />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            class="items-center"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <div>
        <sub-nav v-if="isLoggedIn" data-test="subnav"></sub-nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/stores/user";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Nav/ProfileImage.vue";
import SubNav from "@/components/Nav/SubNav.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Afwit Careers",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life At Afwit", url: "/" },
        { text: "How we Hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "jobs/results" },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]), //exposes property userStore
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser", "logOut"]),
  },
};
</script>
