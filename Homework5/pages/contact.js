import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";

export const contact = () => `<div id="contact" class="home">
      ${renderNav()}
      <section class="stub">
    <main>
        <!-- ct ==== Contact -->
        <div class="ctHeroHolder">
            <p>WE'RE HERE TO HELP</p>
            <h1>Get in Touch</h1>
        </div>

        <div class="ctSection2">
            <p class="intro">Whether you have a gear question, need help planning a trip, or just want to say hello — our team responds within one business day.</p>

            <div class="ctcontent">
                <form class="contactform" action="#" method="post">
                    <div class="formrow">
                        <div class="field">
                            <label for="fullname">Full Name <span>*</span></label>
                            <input type="text" id="fullname" name="fullname" placeholder="Jane Smith" required>
                        </div>
                        <div class="field">
                            <label for="email">Email Address <span>*</span></label>
                            <input type="email" id="email" name="email" placeholder="jane@example.com" required>
                        </div>
                    </div>

                    <div class="field">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="(303) 555-0000">
                    </div>

                    <div class="field">
                        <label for="subject">Subject <span>*</span></label>
                        <select id="subject" name="subject" required>
                            <option value="" selected></option>
                            <option value="general">General Question</option>
                            <option value="gear">Gear Advice</option>
                            <option value="trip">Trip Planning</option>
                            <option value="order">Order Help</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="field">
                        <label for="message">Message <span>*</span></label>
                        <textarea id="message" name="message" placeholder="Tell us what's on your mind — the more detail, the better we can help." required></textarea>
                    </div>

                    <button type="submit" class="sendbtn">Send Message &rarr;</button>
                </form>

                <div class="infocol">
                    <div class="infobox">
                        <h3>Store Information</h3>
                        <div class="inforow">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            <p class="address">4821 Trailhead Blvd<br>Boulder, CO 80301</p>
                        </div>
                        <div class="inforow">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <p>(303) 555-0182</p>
                        </div>
                        <div class="inforow">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <p>hello@summitridge.com</p>
                        </div>
                    </div>

                    <div class="infobox">
                        <h3>Store Hours</h3>
                        <div class="hoursrow"><span>Mon – Fri</span><b>8am – 8pm</b></div>
                        <div class="hoursrow"><span>Saturday</span><b>7am – 9pm</b></div>
                        <div class="hoursrow"><span>Sunday</span><b>9am – 6pm</b></div>
                        <div class="opennow">
                            <span class="dot"></span>
                            <span>Open Now</span>
                        </div>
                    </div>

                    <a href="#" class="mapbox">
                        <div class="mapimg" style="background-image: url(images/ct/map-preview.jpg)"></div>
                        <div class="maptext">
                            <svg class="mappin" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            <p>Boulder, CO</p>
                            <span>Click to open in Maps</span>
                        </div>
                    </a>

                    <div class="infobox">
                        <h3>Follow Along</h3>
                        <div class="socials">
                            <a href="#" aria-label="Instagram">IG</a>
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="YouTube">YT</a>
                            <a href="#" aria-label="Twitter">X</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ctSection3">
            <div class="faqholder">
                <p class="eyebrow">COMMON QUESTIONS</p>
                <h2>FAQs</h2>

                <div class="faqlist">
                    <details class="faqitem">
                        <summary>Do you offer gear rentals?
                            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <p>I couldn't tell you bro</p>
                    </details>

                    <details class="faqitem">
                        <summary>What is your return policy?
                            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <p>non-existent</p>
                    </details>

                    <details class="faqitem">
                        <summary>Do you price-match competitors?
                            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <p>It's free</p>
                    </details>

                    <details class="faqitem">
                        <summary>Can I get gear fitted before purchasing?
                            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <p>No.</p>
                    </details>

                    <details class="faqitem">
                        <summary>Do you ship internationally?
                            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="#E8722A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <p>If you ask nicely</p>
                    </details>
                </div>
            </div>
        </div>
    </main>
      </section>
      ${renderFooter()}
    </div>`;