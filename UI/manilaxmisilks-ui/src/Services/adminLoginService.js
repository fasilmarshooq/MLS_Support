export function validateLogin(userName, Password) {
  if (userName === "security.admin" && Password === "a") {
    localStorage.setItem("adminLogedIn", true);
    return true;
  }
  return false;
}

export function validateAuth() {
  if (localStorage.getItem("adminLogedIn")) return true;
  return false;
}
