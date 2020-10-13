import http from "./httpService.js";

const apiEndPoint = `${window.apiEndPoint}/api/User`;

export async function GetAccessToken() {
  try {
    const response = await http.get(`${apiEndPoint}/AccessToken`);
    return response.data;
  } catch (error) {
    return {};
  }
}

export function PostUser(user) {
  return http.post(`${apiEndPoint}/User`, user);
}

export async function validateLogin(userName, Password) {
  const response = await http.get(
    `${apiEndPoint}/Login?userName=${userName}&Password=${Password}`
  );

  return response.data;
}

export function GetCurrentUser() {
  return localStorage.getItem("CurrentUser");
}

export function CheckAdminAccess() {
  if (localStorage.getItem("Admin") === "true") {
    return true;
  }
  return false;
}

export function SetUserContext(Name, IsAdmin) {
  localStorage.setItem("CurrentUser", Name);
  localStorage.setItem("Admin", IsAdmin);
}

export function LogOut(history) {
  localStorage.clear();
  history.push("/Login");
}
