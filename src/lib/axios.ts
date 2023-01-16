import axios from "axios";

/**
 * * If you are going to run on a different port or a different url,
 * * please change the base url
 */
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
