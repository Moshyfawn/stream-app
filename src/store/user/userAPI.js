import { get, post, del } from "../../utils/request";

export const login = fields =>
  post(`api/users/login`, fields).then(response => response.data);

export const register = fields =>
  post("api/users/register", fields).then(response => response.data);

export const currentUser = () =>
  get("api/users/current_user").then(response => response.data);

export const logout = () => del(`/sign_out`);
