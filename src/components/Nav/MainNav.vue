<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              data-test="main-nav-list-item"
              class="flex h-full ml-9 first:ml-0"
            >
              <a href="/" class="flex items-center py-2.5">{{ menuItem }}</a>
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
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/Nav/ProfileImage.vue";
import SubNav from "@/components/Nav/SubNav.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Afwit Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life At Afwit",
        "How we Hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    logOut() {
      this.isLoggedIn = false;
    },
  },
};
</script>
