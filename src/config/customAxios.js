import axios from "axios";

let accToken = localStorage.getItem("accToken");

export const baseUrl = "https://moon-blog-js.herokuapp.com";
//export const baseUrl = "http://localhost:5002";
const customAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-access-token": accToken,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

customAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 408) {
      const refToken = localStorage.getItem("refToken");
      const res = await axios.post(`${baseUrl}/auth/token`, {
        refToken,
      });
      localStorage.setItem("accToken", res.data.accToken);
      originalRequest.headers["x-access-token"] = res.data.accToken;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default customAxios;
