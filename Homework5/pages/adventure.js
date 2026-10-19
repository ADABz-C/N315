import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";

export const adventureGuides = () => `<div id="adventure-guides" class="home">
    ${renderNav()}
    <!-- ag ==== Adventure Guide -->
    <div class="agHeroHolder">
        <p>EXPERT KNOWLEDGE</p>
        <h1>Adventure Guides</h1>
    </div>

    <div class="agSection2">
        <div class="textbox">
            <h1>Learn from People Who've Been There</h1>
            <p>Every guide in our library is written by a Summit Ridge staff member or trusted guide partner with firsthand field experience. Whether you're heading into the backcountry for the first time or refining technique after years of practice, our guides give you the knowledge to go further — and safer.</p>
        </div>

        <div class="textbox">
            <div class="obj">
                <p>34</p><span>Published Guides</span>
            </div>
            <div class="obj">
                <p>6</p><span>Expert Authors</span>
            </div>
            <div class="obj">
                <p>48K</p><span>Monthly Readers</span>
            </div>
        </div>
    </div>

    <div class="agSection3">
        <div class="cardGrid">
            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag1.jpg)"><span class="tag">Camping</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Dana Holbrook</span><span>8 min read</span></div>
                    <h3>Beginner Camping Checklist</h3>
                    <p>Everything a first-timer needs to pack — shelter, sleep systems, cooking gear, and leave-no-trace essentials. Don't leave home without it.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>

            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag2.jpg)"><span class="tag">Hiking</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Leila Ramos</span><span>12 min read</span></div>
                    <h3>Best Indiana Hiking Trails</h3>
                    <p>Hoosiers have more to explore than you might think. We've mapped 12 hidden gems across state and national parks with ratings and parking info.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>

            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag3.jpg)"><span class="tag">Gear Guide</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Marcus Okonkwo</span><span>10 min read</span></div>
                    <h3>Choosing the Right Backpack</h3>
                    <p>Torso length, hip-belt fit, and frame type all matter more than volume. Our specialists answer every variable so you buy right the first time.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>

            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag4.jpg)"><span class="tag">Camping</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Jonah Steele</span><span>6 min read</span></div>
                    <h3>Campfire Cooking Basics</h3>
                    <p>From foil packets to cast iron skillet dinners, these recipes are built for the backcountry and easy to prep at home the night before you leave.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>

            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag5.jpg)"><span class="tag">Kayaking</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Leila Ramos</span><span>7 min read</span></div>
                    <h3>Kayaking Safety Tips</h3>
                    <p>Whether you're on flatwater or Class III rapids, these protocols will keep you upright, safe, and confident on the water for years to come.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>

            <article class="cards">
                <div class="cardImg" style="background-image:url(images/ag/ag6.jpg)"><span class="tag">Ethics</span></div>
                <div class="cardBody">
                    <div class="meta"><span>Dana Holbrook</span><span>8 min read</span></div>
                    <h3>Leave No Trace Principles</h3>
                    <p>The seven LNT principles aren't just rules — they're a mindset. Learn how to explore wild places responsibly without leaving a mark.</p>
                    <a href="#" class="readMore">Read More &rarr;</a>
                </div>
            </article>
        </div>
    </div>

    <div class="agSection4">
        <div class="leftsidetext">
            <span class="eyebrow">FEATURED VIDEO</span>
            <h2>How to Choose Your First Backpacking Tent</h2>
            <p>Our gear specialist Marcus walks you through seasonality ratings, pole systems, vestibule space, weight-to-livability ratios, and setup time — so you can pick the tent that matches your real adventures, not just a spec sheet.</p>
            <div class="videoMeta"><span>28 min</span><span>1.2k views</span><span>Gear Guides Series, Ep. 4</span></div>
            <a href="#" class="btnOrange">&#9654; Watch Now</a>
        </div>

        <div class="rightsidetext">
            <div class="videoThumb" style="background-image:url(images/ag/video-thumb.jpg)">
                <button class="playBtn" aria-label="Play video">&#9654;</button>
                <span class="duration">28:14</span>
            </div>
        </div>
    </div>
    ${renderFooter()}
`
