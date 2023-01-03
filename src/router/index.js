import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultView from "@/views/JobResultView.vue";
import JobView from "@/views/JobView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
