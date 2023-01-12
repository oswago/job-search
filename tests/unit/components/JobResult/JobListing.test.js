import { render, screen } from "@/testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobFilterSideBar/JobListing";

describe("JobListing", () => {
  /* const createJob = (jobProp = {}) => ({
    title: "Vue developer",
    organization: "AIRBNB",
    ...jobProp,
  });
*/
  const renderJob = (jobProp) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProp,
        },
      },
    });
  };

  it("rendesrs job title", () => {
    renderJob();
    expect(screen.getByText("Vue developer")).toBeInTheDocument();
  });

  it("rendesrs organization", () => {
    renderJob();
    expect(screen.getByText("AiBNB")).toBeInTheDocument();
  });
});
