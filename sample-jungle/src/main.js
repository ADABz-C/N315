import "./sass/styles.scss"
import { loadPage } from "./model/model.js";
function changeRoute(){
  let hashtag = window.location.hash;
  let pageID = hashtag.replace("#", "");

  console.log(pageID);

  loadPage(pageID);
}


function initApp(){
  loadPage("home");
  window.addEventListener("hashchange", changeRoute);
}

initApp();