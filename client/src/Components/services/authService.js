import jwtDecode from "jwt-decode";
import http from "./httpService";
import { baseUrl } from "../Config.json";


const apiEndpoint = baseUrl + "user/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export async function register(name, email, password) {
  const { data } = await http.post(baseUrl+"user/register", {name, email, password });
  return data;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  register,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};