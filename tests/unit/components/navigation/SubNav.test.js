import SubNav from "@/components/Nav/SubNav";
import { render } from "vue";

describe("Subnav", () => {
  const renderThesubNav = (routeName) => {
    render(SubNav, {
      global: {
        mocks: {
          name: routeName,
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return {
          onJobResultsPage: true,
        };
      },
    });
  };

  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      renderThesubNav(routeName);

      const jobCount = screen.getByText("1653");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on  job page", () => {
    it("does not displays job count", () => {
      const routeName = "Home";
      renderThesubNav(routeName);

      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
