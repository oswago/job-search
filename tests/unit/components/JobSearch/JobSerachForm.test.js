import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job resullts page with user parameters", async () => {
      // eslint-disable-next-line no-undef
      const push = vi.fn();
      const $router = { push };
      render(JobSearchForm, {
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = screen.getByRole("textbox", {
        name: /role/i,
      });
      await userEvent.type(roleInput, "Vue Developer");

      const locationinput = screen.getByRole("textbox", {
        name: /where?/i,
      });
      await userEvent.type(locationinput, "Dallas");

      const submitButton = screen.getByRole("button", {
        name: /search/,
      });

      await userEvent.click(submitButton);

      expect(push).toHaveBeenCalled({
        name: "JobResults",
        query: { role: "Vue Developer", location: "Dallas" },
      });
    });
  });
});
