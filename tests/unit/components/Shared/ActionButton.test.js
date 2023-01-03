import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton";

describe("ActionBtutton", () => {
  it("It renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I am Clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I am Clickable");
  });
  it("It applies one of several styles", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "I am Clickable",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
