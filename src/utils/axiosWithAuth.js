import axios from "axios"
import url from "../components/URL"
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token")

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: url,
  })
}
