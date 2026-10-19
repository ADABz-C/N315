import {
    loadPages
} from "/src/model.js";
import {
    showToast
} from "/src/utility.js";
let isLoggedIn = false;

function changeRoute() {
    let hashtag = window.location.hash;
    let pageID = hashtag.replace("#", "");

    if (pageID) {
        loadPages(pageID) // Handle home page route
    } else {
        loadPages("home");
        // Handle about page route
    }

    initPageListeners();
}

function initURLListener() {
    window.addEventListener("hashchange", changeRoute);

    changeRoute(); // Load the initial route based on the current hash
}

function initPageListeners() {
    const loadBtn = document.getElementById("loadBtn");
    if (loadBtn) {
        loadBtn.addEventListener("click", loadData);
    }
}

function loadData() {
    const data = document.querySelector("#data");
    showToast("Loading data...", "loading");

    // pretending to load data
    setTimeout(() => {
        data.innerHTML = /*html*/ `
<h2>Student Data</h2>
<p>Name: Jeedy 234</p>
<p>Email: jeedy234@example.com</p>
`;
        showToast("Data loaded successfully!", "success");
    }, 2000); // Simulate a 2-second delay for loading data
}


function initLogin() {
    const loginBtn = document.querySelector("#loginBtn");
    const loginModal = document.querySelector("#loginModal");
    const closeModal = document.querySelector("#closeModal");
    const loginForm = document.querySelector("#loginForm");

    loginBtn.addEventListener("click", () => {
        if (isLoggedIn) {
            isLoggedIn = false;
            loginBtn.innerHTML = "Login";

            showToast("You have been logged out.", "info");
            return;
        }

        loginModal.classList.add("modal--show");
    });

    closeModal.addEventListener("click", () => {
        loginModal.classList.remove("modal--show");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (email === "") {
            showToast("Email cannot be empty.", "error");
            return;
        }

        if (email.length < 5) {
            showToast("Email too short.", "error");
            return;
        }
        if (!email.includes("@")) {
            showToast("Email must contain '@' .", "error");
            return;
        }
        if (password === "") {
            showToast("Password cannot be empty.", "error");
            return;
        }
        if (password.length < 6) {
            showToast("Password must be at least 6 characters long.", "error");
            return;
        }
        isLoggedIn = true;
        loginBtn.innerHTML = "Logout";
        showToast("You have been logged in.", "success");
        loginModal.classList.remove("modal--show");
        loginForm.reset();
    });
}

function initApp() {
    initURLListener();
    initLogin();
}
initApp();