import home from "./pages/home";

export function loadPage(pageID){
    document.querySelector("#app").innerHTML = home();
}