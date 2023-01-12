import axios from "axios";

const getJobs = async () => {
  const base = "http://localhost:3000";
  //const base = import.meta.env.VITE_APP_API_URL;
  //console.log("BaseUrl:" + baseUrl);
  const url = `${base}/jobs`;
  const response = await axios.get(url);
  return response.data;
};

export default getJobs;
