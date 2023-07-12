export function isAuthenticated() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true';
}

export function setLoggedIn() {
  localStorage.setItem("isLoggedIn", "true");
  console.log("User logged in");
}

export function setLoggedOut() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
}
