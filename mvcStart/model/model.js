
const homePage = `    <div id="app">
        <h1>Welcome to the home page</h1>
        <img src="images/gero.jpg" alt="gero">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi fuga saepe laboriosam aspernatur nemo, rem exercitationem incidunt quasi, cumque tempore fugit repellat facere praesentium impedit distinctio corrupti! Vitae, voluptatem?</p>
    </div>`;

const aboutPage = `<div id="app">
        <div class="card">
            <img class="card__image" src="images/small.jpg" alt="something">
            <h2 class="card__title">Chidi Adabanya</h2>
            <p class="card__text">Student in N315 class</p>
            <button class="card__button card__button--primary">Learn More</button>
        </div>
        <div class="card">
            <img class="card__image" src="images/small.jpg" alt="something">
            <h2 class="card__title">Chidi Adabanya</h2>
            <p class="card__text">Student in N315 class</p>
            <button class="card__button card__button--secondary">Learn More</button>
        </div>`;
const contactPage = `    <div id="app">
        <div class="contactWrapper">
            <h1 class="contactWrapper__title">Contact Us <img src="images/telephone.jpg" alt=""></h1>
            <input class="contactWrapper__name" type="text" placeholder="Name">
            <input class="contactWrapper__email" type="text" placeholder="E-mail">
            <input class="contactWrapper__message" type="text" placeholder="Message">
            <button class="contactWrapper__btn">Send Message</button>
        </div>
    </div>`;
const servicesPage = `    <div id="app">
        <h1>Welcome to services page</h1>
        <img src="images/goofy.jpg" alt="goofy">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque magni tempore unde distinctio quo omnis temporibus expedita animi dolorem atque. Qui ipsum temporibus pariatur velit at recusandae adipisci numquam animi.</p>
    </div>`;

const pages = {
    home: homePage,
    about: aboutPage,
    contact: contactPage,
    services: servicesPage,
};

export function changePage(pageName) {
    document.querySelector("#app").
    innerHTML = pages[pageName]
}
export function loadData(fName, callback) {
    console.log("My first name is: ", fName);

    let newName = fName + " Adabanya";
    callback(newName)
}