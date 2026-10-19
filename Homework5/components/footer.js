export function renderFooter() {
    return /*html*/ `
<section class="footer">
    <div class="title-section">
        <div class="logo">
            <img src="src/assets/MountainLogo.svg" alt="Summit Ridge Logo" />
        </div>
        <div class="content">
            <h1 class="Main">SUMMIT RIDGE</h1>
            <span class="subtitle">OUTFITTERS</span>
        </div>
    </div>
    <div class="icons">
        <button class="icon"><img src="src/assets/InstagramLogo.svg" alt=""></button>
        <button class="icon"><img src="src/assets/FacebookLogo.svg" alt=""></button>
        <button class="icon"><img src="src/assets/YouTubeLogo.svg" alt=""></button>
        <button class="icon"><img src="src/assets/TwitterLogo.svg" alt=""></button>
    </div>
    <div class="info-container">
        <div class="info-section">
            <h1 class="info-title" style="margin-top: 40px;">EXPLORE</h1>
            <div class="links">
                <a href="#shop">Shop</a>
                <a href="#shop">Shop all Gear</a>
                <a href="#adventure-guides">Adventure Guides</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div class="info-section">
            <h1 class="info-title">CONTACT</h1>
            <div class="logo-and-info"><img src="src/assets/Phone.svg" alt="" class="logo">
                <p class="info">4821 Trailhead Blvd Boulder, CO 8031</p>
            </div>
            <div class="logo-and-info"><img src="src/assets/Location.svg" alt="" class="logo">
                <p class="info">(303) 555-0182</p>
            </div>
            <div class="logo-and-info"><img src="src/assets/Mail.svg" alt="" class="logo">
                <p class="info">hello@summitridge.com</p>
            </div>
        </div>
        <div class="info-section">
            <h1 class="info-title">STORE HOURS</h1>
            <div class="days-and-hours">
                <span class="days">Mon - Fri</span>
                <span class="hours">8am - 8pm</span>
            </div>
            <div class="days-and-hours">
                <span class="days">Saturday</span>
                <span class="hours">7am - 9pm</span>
            </div>
            <div class="days-and-hours">
                <span class="days">Sunday</span>
                <span class="hours">9am - 6pm</span>
            </div>
        </div>
    </div>
    <div class="open-now">
        <div class="indicator"></div>
        <span class="text">Open Now</span>
    </div>
    <div class="true-footer">
        <p class="license">© 2026 Summit Ridge Outfitters, LLC. All rights reserved.</p>
        <div class="extras">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Returns & Exchange</p>
        </div>
    </div>
</section>
`;
}