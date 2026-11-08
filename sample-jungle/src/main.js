import "./sass/styles.scss"
import { loadPage } from "./model/model.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
function changeRoute(){
  let hashtag = window.location.hash;
  let pageID = hashtag.replace("#", "");

  console.log(pageID);

  loadPage(pageID);
}


let toastTimer;
let toastClearTimer;

function showToast(message, type = "success"){
  const toast = document.querySelector("#toast");

  clearTimeout(toastTimer);
  clearTimeout(toastClearTimer);

  toast.textContent = message;
  toast.classList.toggle("toast--error", type === "error");
  toast.classList.add("toast--visible");

  toastTimer = setTimeout(() => {
    toast.classList.remove("toast--visible");
    // empty it after the fade-out so the hidden toast isn't read out
    toastClearTimer = setTimeout(() => { toast.textContent = ""; }, 300);
  }, type === "error" ? 8000 : 5000);
}

// Friendly text for the Firebase error codes sign up and login can hit
const AUTH_ERRORS = {
  "auth/email-already-in-use": "That email already has an account. Try logging in.",
  "auth/invalid-email": "That email address doesn’t look right.",
  "auth/weak-password": "Please choose a stronger password (at least 8 characters).",
  // Firebase reports a wrong email or a wrong password as the same error on purpose
  "auth/invalid-credential": "That email or password isn’t right. Please try again.",
  "auth/user-not-found": "That email or password isn’t right. Please try again.",
  "auth/wrong-password": "That email or password isn’t right. Please try again.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/network-request-failed": "Couldn’t reach the server. Check your connection and try again.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  "auth/operation-not-allowed": "Email/password sign in is turned off in the Firebase console.",
  "auth/invalid-api-key": "Firebase isn’t set up yet: check the VITE_FIREBASE_* values in your .env file.",
  "app/no-app": "Firebase isn’t initialised: src/firebase.js needs to call initializeApp().",
};

// Loaded when a form is submitted instead of at the top, so the rest of the site
// still works (and the form can show a message) if the .env values are missing.
async function getFirebaseAuth(){
  const firebase = await import("./firebase.js");

  // Use the file's `auth` export if it has one. Otherwise fall back to the app
  // that file initialised (getAuth() with no argument uses that default app).
  return firebase.auth ?? getAuth();
}

// Sign in with Firebase Authentication, then go to the home page
async function handleLogin(form){
  const data = new FormData(form);
  const button = form.querySelector(".auth-submit");

  button.disabled = true;
  form.setAttribute("aria-busy", "true");

  try {
    const auth = await getFirebaseAuth();

    const credential = await signInWithEmailAndPassword(
      auth,
      data.get("email").trim(),
      data.get("password")
    );

    // displayName is the "First Last" saved at sign up (missing for older accounts)
    const firstName = credential.user.displayName?.split(" ")[0];
    showToast(firstName ? `Welcome back, ${firstName}!` : "Welcome back!");

    form.reset();
    // the toast lives outside #app, so it stays visible on the home page
    window.location.hash = "home";
  } catch (error) {
    console.error(error);
    // stay on the login page and keep the email so the visitor can try again
    showToast(
      AUTH_ERRORS[error.code] ?? "Something went wrong signing you in. Please try again.",
      "error"
    );
  } finally {
    button.disabled = false;
    form.removeAttribute("aria-busy");
  }
}

// Create the account with Firebase Authentication (email + password)
async function handleSignup(form){
  const data = new FormData(form);
  const firstName = data.get("firstName").trim();
  const lastName = data.get("lastName").trim();
  const button = form.querySelector(".auth-submit");

  // stop double submits while Firebase is working
  button.disabled = true;
  form.setAttribute("aria-busy", "true");

  try {
    const auth = await getFirebaseAuth();

    const credential = await createUserWithEmailAndPassword(
      auth,
      data.get("email").trim(),
      data.get("password")
    );

    // keep the name on the account; the account already exists, so a failure here is not fatal
    try {
      await updateProfile(credential.user, { displayName: `${firstName} ${lastName}` });
    } catch (error) {
      console.warn("Account created, but the name could not be saved:", error);
    }

    showToast(`You’re signed up! Welcome to The Jungle Cook, ${firstName}.`);
    form.reset();
  } catch (error) {
    console.error(error);
    // the form keeps what was typed so the visitor can fix it and try again
    showToast(
      AUTH_ERRORS[error.code] ?? "Something went wrong creating your account. Please try again.",
      "error"
    );
  } finally {
    button.disabled = false;
    form.removeAttribute("aria-busy");
  }
}

function initApp(){
  loadPage("home");
  window.addEventListener("hashchange", changeRoute);

  // The header "Login" button goes to #login (the footer already links there)
  document.querySelector("header nav button")?.addEventListener("click", () => {
    window.location.hash = "login";
  });

  // Toast container. 
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.append(toast);


  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!form.matches(".auth-form")) return;

    e.preventDefault();

    // Sign up and login both go to Firebase Authentication
    if (form.dataset.action === "signup") {
      handleSignup(form);
      return;
    }

    if (form.dataset.action === "login") {
      handleLogin(form);
      return;
    }

    if (form.dataset.success) {
      showToast(form.dataset.success);
      form.reset();
    }
  });

  // Render the page when the site is opened or refreshed on a route like #login
  if (window.location.hash) {
    changeRoute();
  }
}

initApp();