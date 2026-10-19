// Minimal simulated authentication — no backend, just persisted client state.
// NOTE: storing plain-text passwords in localStorage is only acceptable here
// because this is a client-only simulation for coursework, never do this in
// a real application.
const SESSION_KEY = "summitRidge.isLoggedIn";
const USERS_KEY = "summitRidge.users";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function isLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "true";
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = getUsers().find((u) => u.email === normalizedEmail);

  if (!user || user.password !== password) {
    return { success: false, error: "Incorrect email or password." };
  }

  localStorage.setItem(SESSION_KEY, "true");
  return { success: true };
}

export function signUp({ firstName, lastName, email, password }) {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some((u) => u.email === normalizedEmail)) {
    return {
      success: false,
      error: "An account with that email already exists.",
    };
  }

  users.push({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: normalizedEmail,
    password,
  });
  saveUsers(users);
  localStorage.setItem(SESSION_KEY, "true");
  return { success: true };
}