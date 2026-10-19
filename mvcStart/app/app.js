import {loadData} from "../model/model.js";
import {changePage} from "../model/model.js";

const loadDataBtn = document.querySelector("#loadDataBtn");

loadDataBtn.addEventListener("click", () => {
    loadData("Chidi", myReturnData);
});

function myReturnData(data){
    console.log("Data returned: ", data);
}

function initListeners(){
    changePage("home");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let btnId = e.currentTarget.id;
            changePage(btnId);
        });
    });
}

initListeners();