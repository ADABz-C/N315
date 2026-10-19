import "../scss/styles.scss";
import { pages } from "./pages/pages";
import { logout } from "./auth";
import { showToast } from "./components/toast";
import { clearFormFeedback } from "./utils/formFeedback";
import { handleLoginSubmit } from "./pages/login";
import { handleSignupSubmit } from "./pages/signup";
const app = document.getElementById("app");

function getRoute() {
  return location.hash.slice(1) || "shop";
}

function render() {
  const route = getRoute();
  const page = pages[route] ?? pages["shop"];
  app.innerHTML = page();
}

window.addEventListener("hashchange", render);

app.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const { action } = trigger.dataset;

  if (action === "logout") {
    event.preventDefault();
    logout();
    render();
    showToast("You have logged out successfully.", "success");
  } else if (action === "toggle-menu") {
    const menu = document.getElementById("mobile-menu");
    const isOpen = menu.classList.toggle("mobile-menu--open");
    menu.hidden = !isOpen;
    trigger.setAttribute("aria-expanded", String(isOpen));
  }
});

// Delegated submit handling for the login/signup forms, since they're
// injected dynamically and re-created on every render.
app.addEventListener("submit", (event) => {
  const form = event.target;

  if (form.dataset.form === "login") {
    event.preventDefault();
    handleLoginSubmit(form);
  } else if (form.dataset.form === "signup") {
    event.preventDefault();
    handleSignupSubmit(form);
  }
});

// Clear a field's error state the moment the user starts correcting it,
// instead of leaving a stale warning on screen until the next submit.
app.addEventListener("input", (event) => {
  const input = event.target;
  if (!input.classList.contains("invalid")) return;

  input.classList.remove("invalid");

  const form = input.closest("form[data-form]");
  if (!form || form.querySelector("input.invalid")) return;

  clearFormFeedback(form.querySelector(".form-feedback"));
});

render();