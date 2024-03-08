import axios, { Axios } from "axios"
import { makeAxiosCallerHandleDates } from "./dates";

export const endpoints = {
  register: "/register",
  loginCookie: "/login",
  loginEmailPassword: "/login",
  logout: "/logout",
  googleLogin: "/google/login",
  githubLogin: "/github/login",
}

export function createAxiosInstance(serviceURL: string): Axios {
  const caller = axios.create({
    baseURL: serviceURL + "/api",
    withCredentials: true
  })
  makeAxiosCallerHandleDates(caller)
  return caller
}
