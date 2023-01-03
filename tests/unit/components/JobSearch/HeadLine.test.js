import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HeadLine from "@/components/JobSearch/HeadLine";
import { setInterval } from "core-js";

describe("HeadLine", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays introductory action verb", () => {
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toEqual("Build for everyone");
  });
  it("changes action verb at a consistent interval", () => {
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    console.log(wrapper.vm.action);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
  it("removes interval when componenet disappear", () => {
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
