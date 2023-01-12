import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTERED_JOBS_BY_ORGANIZATION = "FILTERED_JOBS_BY_ORGANIZATION";
export const UNIQUE_JOBS_TYPES = "UNIQUE_JOBS_TYPES";
export const FILTERD_JOBS_BY_JOB_TYPES = "FILTERD_JOBS_BY_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
export const INCLUDE_JOB_BY_TYPE = "INCLUDE_JOB_BY_TYPE";
export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganization = new Set();
      state.jobs.forEach((job) => uniqueOrganization.add(job.organization));
      return uniqueOrganization;
    },
    [FILTERED_JOBS_BY_ORGANIZATION](state) {
      const userStore = useUserStore();
      if (userStore.selectedOrganizations.length === 0) {
        return state.jobs;
      }
      return state.jobs.filter((job) =>
        userStore.selectedOrganizations.includes(job.organization)
      );
    },
    [UNIQUE_JOBS_TYPES](state) {
      const uniqueJobTypes = new Set();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },
    [FILTERD_JOBS_BY_JOB_TYPES](state) {
      const useJobsStore = useUserStore();
      if (useJobsStore.selectedJobTypes.length === 0) {
        return state.jobs;
      }
      return state.jobs.filter((job) =>
        useJobsStore.selectedJobTypes.includes(job.jobType)
      );
    },
    [FILTERED_JOBS](state) {
      const userStore = useUserStore();
      const noSelectedOrganization =
        userStore.selectedOrganizations.length === 0;
      const noSelectedJobtype = userStore.selectedJobTypes.length === 0;

      let select = state.jobs.filter((job) => {
        if (noSelectedOrganization) return state.jobs;
        return userStore.selectedOrganizations.includes(job.organization);
      });

      select = select.filter((job) => {
        if (noSelectedJobtype) return select;
        return userStore.selectedJobTypes.includes(job.jobType);
      });

      return select;
    },
  },
});
