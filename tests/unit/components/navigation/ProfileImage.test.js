import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/Nav/ProfileImage";

describe("Profile Image", () => {
  it("renders image", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
