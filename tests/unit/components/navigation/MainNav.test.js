import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Nav/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Afwit Careers");
  });
  it("displays menu items of my nav", () => {
    const wrapper = shallowMount(MainNav);
    const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");

    const navMenuItemsText = navMenuItems.map((items) => items.text());
    expect(navMenuItemsText).toEqual([
      "Teams",
      "Locations",
      "Life At Afwit",
      "How we Hire",
      "Students",
      "Jobs",
    ]);
    //console.log(navMenuItemsText);
  });
  describe("when use is logged Out", () => {
    it("Prompts user to log in", () => {
      const wrapper = shallowMount(MainNav);
      const loggingButton = wrapper.find("[data-test='login-button']");
      const profileButton = wrapper.find("[data-test='profile-image']");
      expect(loggingButton.exists()).toBe(true);
      expect(profileButton.exists()).toBe(false);
    });
  });
  describe("when use is logged In", () => {
    it("Shows user profile", async () => {
      const wrapper = shallowMount(MainNav);

      let profileImage = wrapper.find("[data-Test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loggingButton = wrapper.find("[data-Test='login-button']");
      await loggingButton.trigger("click");

      profileImage = wrapper.find("[data-Test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnav with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loggingButton = wrapper.find("[data-Test='login-button']");
      await loggingButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
