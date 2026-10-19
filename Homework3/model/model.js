import reason1 from "../pages/reason1.js";
import home from "../pages/home.js";
import reason2 from "../pages/reason2.js";
import reason3 from "../pages/reason3.js";
import reason4 from "../pages/reason4.js"
export function loadPage(pageID) {
    console.log(`model.js ${pageID}`);
    const main = document.querySelector("main");

    switch (pageID) {
        case "home":
            main.innerHTML = home
            break;
        case "reason1":
            main.innerHTML = reason1
            break;
        case "reason3":
            main.innerHTML = reason3
            break;
        case "reason2":
            main.innerHTML = reason2
            break;
        case "reason4": 
            main.innerHTML = reason4
            break;
    }
}
