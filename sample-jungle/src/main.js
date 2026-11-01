import "./sass/styles.scss"
import { loadPage } from "./model/model.js";
function changeRoute(){
  let hashtag = window.location.hash;
  let pageID = hashtag.replace("#", "");

  console.log(pageID);

  loadPage(pageID);
}


let toastTimer;
let toastClearTimer;

function showToast(message){
  const toast = document.querySelector("#toast");

  clearTimeout(toastTimer);
  clearTimeout(toastClearTimer);

  toast.textContent = message;
  toast.classList.add("toast--visible");

  toastTimer = setTimeout(() => {
    toast.classList.remove("toast--visible");
    // empty it after the fade-out so the hidden toast isn't read out
    toastClearTimer = setTimeout(() => { toast.textContent = ""; }, 300);
  }, 5000);
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