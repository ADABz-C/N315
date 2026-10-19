import {
    isLoggedIn
} from "../src/auth.js";

const NAV_LINKS = [{
        route: "shop",
        label: "Shop",
    },
    {
        route: "adventure-guides",
        label: "Adventure Guides",
    },
    {
        route: "about",
        label: "About Us",
    },
    {
        route: "contact",
        label: "Contact",
    },
];

export function renderNav() {
    const loggedIn = isLoggedIn();
    const currentRoute = location.hash.slice(1) || "shop";

    const links = NAV_LINKS.map(
        ({
            route,
            label
        }) =>
        `<a href="#${route}" class="nav-link${
        route === currentRoute ? " active" : "" }">${label}</a>`,
    ).join("");

    return /*html*/ `
<nav class="nav">
    <div class="title-section">
        <div class="logo">
            <img src="src/assets/MountainLogo.svg" alt="Summit Ridge Logo" />
        </div>
        <div class="content">
            <h1 class="Main">SUMMIT RIDGE</h1>
            <span class="subtitle">Outfitters · Est. 1998</span>
        </div>
    </div>

    <div class="nav-links">${links}</div>

    <div class="nav-actions">
        ${
        loggedIn
        ? `<a href="#" class="login" data-action="logout">Logout</a>`
        : `<a href="#login" class="login">Login</a>`
        }
        <button type="button" class="search-trigger" aria-label="Search">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" stroke-width="1.5" />
                <path d="M18 18L13.8 13.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </button>
        <div class="icons">
            <div class="cart-icon-and-indicator">
                <img src="src/assets/Cart basket.svg" alt="Cart Basket" class="cart-icon" />
                <div class="cart-indicator">
                    <p>3</p>
                </div>
            </div>

            <button type="button" class="nav-btn" data-action="toggle-menu" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                <img src="src/assets/Menu.svg" alt="" class="menu-icon" />
            </button>
        </div>
    </div>

    <div class="mobile-menu" id="mobile-menu" hidden>
        ${links}
    </div>
</nav>
`;
}