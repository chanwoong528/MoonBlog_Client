import axios from "axios";

let accToken = localStorage.getItem("accToken");

const baseUrl = "http://localhost:5002";

const customAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-access-token": accToken,
    "Content-Type": "application/json",
  },
  // TODO: now
  withCredentials: true,
});

customAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(
      "original Request BEFORE: ",
      originalRequest.headers["x-access-token"]
    );
    if (error.response.status === 408) {
      //   console.log("error.respons status: ", error.response.status);
      const refToken = localStorage.getItem("refToken");
      const res = await axios.post("http://localhost:5002/auth/token", {
        refToken,
      });
      //   console.log("newAccTokken: ", res.data.accToken);
      localStorage.setItem("accToken", res.data.accToken);
      originalRequest.headers["x-access-token"] = res.data.accToken;
      console.log(
        "original Request AFTERR: ",
        originalRequest.headers["x-access-token"]
      );
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default customAxios;
