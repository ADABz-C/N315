import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";

export const about = () => `<div id="about" class="home">
      ${renderNav()}
      <section class="about-hero">
        <p class="top-text">BOULDER, CO · EST. 1998</p>
        <h1 class="title">Our Story</h1>
      </section>

      <section class="our-story">
        <div class="story-content">
          <h2>We Started on a Trail.<br />We Built a Community.</h2>
          <p>
            Summit Ridge Outfitters was founded in 1998 by Dana Holbrook after
            completing a solo thru-hike of the Appalachian Trail. What started
            as a small gear shop in a 800-square-foot Boulder storefront has
            grown into one of Colorado's most trusted outdoor outfitters —
            but the mission hasn't changed.
          </p>
          <p>
            We believe that the right gear, paired with the right knowledge,
            changes people's relationship with the outdoors. Not just their
            safety, but their confidence. We've outfitted first-timers heading
            to Rocky Mountain National Park and seasoned alpinists bound for
            Denali.
          </p>
          <p>
            Every product we carry has been field-tested by our staff. Every
            recommendation comes from personal experience. That's the Summit
            Ridge difference — and it's why 87% of our new customers arrive
            referred by existing ones.
          </p>
        </div>
        <div class="story-image">
          <img src="src/assets/mountains.jpg" alt="" />
          <div class="badge">
            <span class="badge-number">25+</span>
            <span class="badge-label">Years Serving the Outdoors</span>
          </div>
        </div>
      </section>

      <section class="mission">
        <p class="top-text">OUR MISSION</p>
        <blockquote>
          “To equip every adventurer — regardless of experience or background
          — with the gear, knowledge, and confidence to safely explore the
          natural world.”
        </blockquote>
      </section>

      <section class="values">
        <p class="top-text">WHAT WE STAND FOR</p>
        <h1 class="title">Our Values</h1>
        <div class="value-cards">
          <div class="value-card">
            <h3>Expertise You Can Trust</h3>
            <p>
              Every team member is an active outdoorsperson who tests the gear
              they sell. We don't move product — we help you make the right
              decision for your adventure.
            </p>
          </div>
          <div class="value-card">
            <h3>Gear for Every Budget</h3>
            <p>
              Premium doesn't have to mean unaffordable. We carry gear across
              every price point without sacrificing safety or quality. Ask us
              — we'll find the right fit.
            </p>
          </div>
          <div class="value-card">
            <h3>Leave No Trace</h3>
            <p>
              We are committed stewards of the wild places we love. 5% of
              every sale goes directly to trail restoration and public lands
              advocacy organizations.
            </p>
          </div>
          <div class="value-card">
            <h3>Community First</h3>
            <p>
              From kids' summer programs to adaptive hiking groups, we
              actively build the outdoor community — not just a customer
              base. The trail is for everyone.
            </p>
          </div>
        </div>
      </section>

      <section class="team">
        <p class="top-text">THE HUMANS BEHIND IT</p>
        <h1 class="title">Meet Our Team</h1>
        <div class="team-grid">
          <div class="team-member">
            <img src="src/assets/profile.jpg" alt="" />
            <h3>Dana Holbrook</h3>
            <p class="role">Founder &amp; CEO</p>
            <p class="bio">
              Former AT thru-hiker and AMGA climbing guide. Dana started
              Summit Ridge from a truck bed at a trailhead in 1998 with $12k
              in savings and a passion for getting people into the backcountry
              safely.
            </p>
          </div>
          <div class="team-member">
            <img src="src/assets/profile.jpg" alt="" />
            <h3>Marcus Okonkwo</h3>
            <p class="role">Head of Gear &amp; Outfitting</p>
            <p class="bio">
              12-year REI veteran turned independent. Marcus has field-tested
              over 400 products and developed Summit Ridge's acclaimed
              gear-fitting methodology used by our entire team.
            </p>
          </div>
          <div class="team-member">
            <img src="src/assets/profile.jpg" alt="" />
            <h3>Leila Ramos</h3>
            <p class="role">Director of Adventure Programs</p>
            <p class="bio">
              AMGA-certified guide and former Outward Bound instructor. Leila
              designs our guided trip offerings and manages relationships with
              40+ regional guiding partners across the Rockies.
            </p>
          </div>
          <div class="team-member">
            <img src="src/assets/profile.jpg" alt="" />
            <h3>Jonah Steele</h3>
            <p class="role">Customer Experience Lead</p>
            <p class="bio">
              Backcountry enthusiast and former REI ranger. Jonah oversees
              retail floor operations and has personally helped thousands of
              customers gear up for their first major trek.
            </p>
          </div>
        </div>
      </section>

      <section class="history">
        <p class="top-text">HOW WE GOT HERE</p>
        <h1 class="title">Company History</h1>
        <div class="timeline">
          <div class="timeline-item">
            <span class="year">1998</span>
            <p>
              Dana opens Summit Ridge from a 600 sqft Boulder storefront with
              $12,000 and a dream.
            </p>
          </div>
          <div class="timeline-item">
            <span class="year">2002</span>
            <p>
              First guided trip program launches: 14 participants summiting
              the Maroon Bells.
            </p>
          </div>
          <div class="timeline-item">
            <span class="year">2007</span>
            <p>
              New flagship store opens at current location. Staff grows to 32
              full-time employees.
            </p>
          </div>
          <div class="timeline-item">
            <span class="year">2012</span>
            <p>
              Loyalty rewards program and full e-commerce platform debut to
              national customers.
            </p>
          </div>
          <div class="timeline-item">
            <span class="year">2018</span>
            <p>
              20th anniversary. Summit Ridge surpasses 10,000 lifetime
              customers served.
            </p>
          </div>
          <div class="timeline-item">
            <span class="year">2024</span>
            <p>
              B Corp certification achieved. Renewed sustainability pledge:
              1% of all sales to trail restoration.
            </p>
          </div>
        </div>
      </section>

      <section class="certifications">
        <p class="top-text">RECOGNITION &amp; CERTIFICATIONS</p>
        <div class="cert-list">
          <span class="cert">B Corp Certified</span>
          <span class="cert">Outdoor Retailer Award 2023</span>
          <span class="cert">1% for the Planet Member</span>
          <span class="cert">REI Co-op Partner</span>
          <span class="cert">Leave No Trace Trainer</span>
          <span class="cert">AMGA Affiliated Guiding</span>
        </div>
      </section>

      <section class="visit-store">
        <p class="top-text">FIND US</p>
        <h1 class="title">Visit the Store</h1>
        <div class="store-content">
          <div class="store-details">
            <p>4821 Trailhead Blvd<br />Boulder, CO 80301</p>
            <p>(303) 555-0182</p>
            <p>Mon – Fri 8am – 8pm · Sat 7am – 9pm · Sun 9am – 6pm</p>
          </div>
          <div class="store-map">
            <img src="https://picsum.photos/seed/boulder/600/360" alt="" />
            <div class="map-card">
              <p class="store-name">Summit Ridge Outfitters</p>
              <p class="store-address">4821 Trailhead Blvd · Boulder, CO</p>
              <button type="button" class="btn-primary">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
      ${renderFooter()}
    </div>`;