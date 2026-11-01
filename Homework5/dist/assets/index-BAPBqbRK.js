var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{}));function r(){try{return JSON.parse(localStorage.getItem(u))??[]}catch{return[]}}function i(e){localStorage.setItem(u,JSON.stringify(e))}function a(){return localStorage.getItem(l)===`true`}function o(){localStorage.removeItem(l)}function s(e,t){let n=e.trim().toLowerCase(),i=r().find(e=>e.email===n);return!i||i.password!==t?{success:!1,error:`Incorrect email or password.`}:(localStorage.setItem(l,`true`),{success:!0})}function c({firstName:e,lastName:t,email:n,password:a}){let o=r(),s=n.trim().toLowerCase();return o.some(e=>e.email===s)?{success:!1,error:`An account with that email already exists.`}:(o.push({firstName:e.trim(),lastName:t.trim(),email:s,password:a}),i(o),localStorage.setItem(l,`true`),{success:!0})}var l,u,d=e((()=>{l=`summitRidge.isLoggedIn`,u=`summitRidge.users`}));function f(){let e=a(),t=location.hash.slice(1)||`shop`,n=p.map(({route:e,label:n})=>`<a href="#${e}" class="nav-link${e===t?` active`:``}">${n}</a>`).join(``);return`
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

    <div class="nav-links">${n}</div>

    <div class="nav-actions">
        ${e?`<a href="#" class="login" data-action="logout">Logout</a>`:`<a href="#login" class="login">Login</a>`}
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
        ${n}
    </div>
</nav>
`}var p,m=e((()=>{d(),p=[{route:`shop`,label:`Shop`},{route:`adventure-guides`,label:`Adventure Guides`},{route:`about`,label:`About Us`},{route:`contact`,label:`Contact`}]}));function h(){return`
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
`}var g=e((()=>{})),_,v=e((()=>{m(),g(),_=()=>`<div id="about" class="home">
      ${f()}
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
      ${h()}
    </div>`}));function y(){return`<section class="welcome">
    <div class="welcome-content">
        <div class="top-text">
            <svg width="32" height="1" viewBox="0 0 32 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31.9891" height="0.987747" fill="#E8722A" />
            </svg>
            Boulder, CO · Est. 1998
        </div>
        <div class="title">
            Where the <span class="orange-text">Trail</span> Begins.
        </div>
        <div class="description">
            Premium outdoor gear and expert guidance for every adventure — from
            your first summit to your hundredth. We'll make sure you're ready.
        </div>
        <div class="buttons">
            <button class="shop-now">
                Shop Now <img src="src/assets/arrowRight.svg" /></button><button class="explore-adventures">Expolore Adventures</button>
        </div>
    </div>
</section>
<section class="stats">
    <div class="stat left-border">
        <h1>25+</h1>
        <p>YEARS IN BUSINESS</p>
    </div>
    <div class="stat left-border">
        <h1>12,400+</h1>
        <p>HAPPY CUSTOMERS</p>
    </div>
    <div class="stat left-border">
        <h1>2,400+</h1>
        <p>PRODUCTS IN STOCK</p>
    </div>
    <div class="stat">
        <h1>4.9 ★</h1>
        <p>AVERAGE REVIEW</p>
    </div>
</section>`}var b=e((()=>{})),x,S=e((()=>{m(),g(),b(),x=()=>`<div id="shop" class="home">
      ${f()}
      ${y()}
      <section class="explore">
        <p class="top-text">EXPLORE THE RANGE</p>
        <h1 class="title">Shop by Category</h1>
        <div class="categories">
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
          <div class="category">
            <img src="https://picsum.photos/200" class="cover" alt="" />
            <div class="title-and-logo">
              <img
                src="src/assets/OrangeMountainLogo.svg"
                class="logo"
                alt=""
              />
              <p>Title</p>
            </div>
          </div>
        </div>
      </section>
      <section class="featured">
        <div class="center-text">
          <p class="top-text">HANDPICKED BY OUR STAFF</p>
          <h1 class="title">Featured Products</h1>
          <div class="products">
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product">
              <div class="chip">Best Seller</div>
              <img src="https://picsum.photos/200" />
              <div class="content">
                <h1 class="title">Trailblazer 65L Backpack</h1>
                <div class="stars">
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                  <img src="src/assets/star.svg" alt="" />
                </div>
                <div class="price-and-link">
                  <p class="price">$289</p>
                  <div class="view-product">
                    <span>View Product</span>
                    <img src="src/assets/OrangeArrowRight.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="view-all-products">
            <span>View all Products</span>
            <img src="src/assets/BlackArrowRight.svg" alt="" />
          </button>
        </div>
      </section>
      <section class="adventure">
        <div class="container">
          <p class="top-text">GO DEEPER</p>
          <h1 class="title" style="color: white">Adventure Inspiration</h1>
          <div class="card-list">
            <div class="card">
              <div class="content">
                <h1 class="title">Rocky Mountain High: A Weekend Trek</h1>
                <p class="description">
                  Three days, 22 miles, and some of the most breathtaking views
                  in the American West. Here's everything you need to know
                  before you go.
                </p>
                <div class="action">
                  <span>Read More</span>
                  <img src="src/assets/OrangeArrowRight.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h1 class="title">Rocky Mountain High: A Weekend Trek</h1>
                <p class="description">
                  Three days, 22 miles, and some of the most breathtaking views
                  in the American West. Here's everything you need to know
                  before you go.
                </p>
                <div class="action">
                  <span>Read More</span>
                  <img src="src/assets/OrangeArrowRight.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h1 class="title">Rocky Mountain High: A Weekend Trek</h1>
                <p class="description">
                  Three days, 22 miles, and some of the most breathtaking views
                  in the American West. Here's everything you need to know
                  before you go.
                </p>
                <div class="action">
                  <span>Read More</span>
                  <img src="src/assets/OrangeArrowRight.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h1 class="title">Rocky Mountain High: A Weekend Trek</h1>
                <p class="description">
                  Three days, 22 miles, and some of the most breathtaking views
                  in the American West. Here's everything you need to know
                  before you go.
                </p>
                <div class="action">
                  <span>Read More</span>
                  <img src="src/assets/OrangeArrowRight.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="remarks">
        <p class="top-text">REAL ADVENTURES, REAL STORIES</p>
        <h1 class="title">What Our Customers Say</h1>
        <div class="comments">
          <div class="comment">
            <div class="stars">
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
            </div>
            <p class="description">
              “Summit Ridge outfitted my entire PCT section hike. The staff
              spent two hours with me making sure every piece of gear was the
              right fit. I can't recommend them enough.”
            </p>
            <div class="user">
              <img src="src/assets/profile.jpg" class="profile"></img>
              <div class="name-and-desc">
                <p class="name">Sarah K.</p>
                <p class="desc">Trail Runner · Denver, CO</p>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="stars">
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
            </div>
            <p class="description">
              “Summit Ridge outfitted my entire PCT section hike. The staff
              spent two hours with me making sure every piece of gear was the
              right fit. I can't recommend them enough.”
            </p>
            <div class="user">
              <img src="src/assets/profile.jpg" class="profile"></img>
              <div class="name-and-desc">
                <p class="name">Sarah K.</p>
                <p class="desc">Trail Runner · Denver, CO</p>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="stars">
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
              <img src="src/assets/star.svg" alt="" />
            </div>
            <p class="description">
              “Summit Ridge outfitted my entire PCT section hike. The staff
              spent two hours with me making sure every piece of gear was the
              right fit. I can't recommend them enough.”
            </p>
            <div class="user">
              <img src="src/assets/profile.jpg" class="profile"></img>
              <div class="name-and-desc">
                <p class="name">Sarah K.</p>
                <p class="desc">Trail Runner · Denver, CO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="stay-in-the-loop">
        <p class="top-text">STAY IN THE LOOP</p>
        <p class="title" style="color: white">Get Trail-Ready Updates</p>
        <p class="desc">New gear drops, expert guides, seasonal sales, and trip inspiration — delivered twice a month. No spam, ever.</p>
        <div class="subscribe">
          <input type="text" placeholder="your@gmail.com">
          <button>Subscribe</button>
        </div>
      </section>
      ${h()}
    </div>`})),C,w=e((()=>{m(),g(),C=()=>`<div id="adventure-guides" class="home">
    ${f()}
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
    ${h()}
`})),T,E=e((()=>{m(),g(),T=()=>`<div id="contact" class="home">
      ${f()}
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
      ${h()}
    </div>`}));function D(e){return!e||!e.trim()}function O(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}var k=e((()=>{}));function A(e,t,n){e&&(e.hidden=!1,e.className=`form-feedback form-feedback--${t}`,e.innerHTML=`<span class="form-feedback__icon">${t===`success`?`✓`:`⚠`}</span><span>${n}</span>`)}function j(e){e&&(e.hidden=!0,e.innerHTML=``)}function M(e){e.querySelectorAll(`.field input`).forEach(e=>e.classList.remove(`invalid`))}function N(e,t){Object.entries(t).forEach(([t,n])=>{n&&e.elements[t]&&e.elements[t].classList.add(`invalid`)})}var P=e((()=>{}));function F(e){let t=e.elements.email.value,n=e.elements.password.value,r=e.querySelector(`#login-feedback`);if(M(e),j(r),D(t)||D(n)){A(r,`error`,`Please complete all required fields.`),N(e,{email:D(t),password:D(n)});return}if(!O(t)){A(r,`error`,`Please enter a valid email address.`),N(e,{email:!0});return}let i=s(t,n);i.success?(A(r,`success`,`You have logged in successfully.`),e.querySelectorAll(`input, button`).forEach(e=>e.disabled=!0),setTimeout(()=>{location.hash=`shop`},900)):(A(r,`error`,i.error),N(e,{email:!0,password:!0}),e.elements.password.value=``)}var I,L=e((()=>{m(),g(),d(),k(),P(),I=()=>`<div id="login" class="home">
      ${f()}
      <section class="auth">
        <div class="auth-hero">
          <p class="top-text">BACK TO THE TRAIL</p>
          <h1 class="title">Welcome Back</h1>
        </div>
        <div class="auth-content">
          <div class="auth-form-panel">
            <h2>Ready for your next adventure?</h2>
            <p class="subtext">
              Log in to Summit Ridge and get back to finding the gear for
              wherever the trail takes you.
            </p>

            <form id="login-form" data-form="login" novalidate>
              <div id="login-feedback" class="form-feedback" hidden></div>

              <label class="field">
                <span>Email Address <span class="required">*</span></span>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  autocomplete="email"
                />
              </label>

              <label class="field">
                <span>Password <span class="required">*</span></span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  autocomplete="current-password"
                />
              </label>

              <button type="submit" class="btn-primary">Login →</button>
            </form>

            <p class="auth-switch">
              Don't have an account? <a href="#signup">Sign Up</a>
            </p>
          </div>

          <div class="auth-side">
            <img
              src="src/assets/mountains.jpg"
              alt=""
              class="auth-side-image"
            />
            <p class="top-text">BOULDER, CO · EST. 1998</p>
            <h2 class="title">Where the Trail Begins.</h2>
            <p class="description">
              Premium outdoor gear and expert guidance for every adventure —
              from your first summit to your hundredth.
            </p>
          </div>
        </div>
      </section>
      ${h()}
    </div>`}));function R(e){let t=e.querySelector(`#signup-feedback`),n={firstName:e.elements.firstName.value,lastName:e.elements.lastName.value,email:e.elements.email.value,password:e.elements.password.value,confirmPassword:e.elements.confirmPassword.value};M(e),j(t);let r=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,D(t)]));if(Object.values(r).some(Boolean)){A(t,`error`,`Please complete all required fields.`),N(e,r);return}if(!O(n.email)){A(t,`error`,`Please enter a valid email address.`),N(e,{email:!0});return}if(n.password.length<8){A(t,`error`,`Password must be at least 8 characters.`),N(e,{password:!0,confirmPassword:!0});return}if(n.password!==n.confirmPassword){A(t,`error`,`Passwords do not match.`),N(e,{password:!0,confirmPassword:!0});return}let i=c(n);i.success?(A(t,`success`,`Account created successfully! Redirecting...`),e.querySelectorAll(`input, button`).forEach(e=>e.disabled=!0),setTimeout(()=>{location.hash=`shop`},900)):(A(t,`error`,i.error),N(e,{email:!0}))}var z,B=e((()=>{m(),g(),d(),k(),P(),z=()=>`<div id="signup" class="home">
      ${f()}
      <section class="auth">
        <div class="auth-hero">
          <p class="top-text">YOUR NEXT ADVENTURE</p>
          <h1 class="title">Join Summit Ridge</h1>
        </div>
        <div class="auth-content">
          <div class="auth-form-panel">
            <h2>A new adventure starts here.</h2>
            <p class="subtext">
              Create your account for trail-ready gear and expert guidance
              from the Summit Ridge crew.
            </p>
            <p class="required-note">All fields are required.</p>

            <form id="signup-form" data-form="signup" novalidate>
              <div id="signup-feedback" class="form-feedback" hidden></div>

              <div class="field-row">
                <label class="field">
                  <span>First Name <span class="required">*</span></span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    autocomplete="given-name"
                  />
                </label>
                <label class="field">
                  <span>Last Name <span class="required">*</span></span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    autocomplete="family-name"
                  />
                </label>
              </div>

              <label class="field">
                <span>Email Address <span class="required">*</span></span>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  autocomplete="email"
                />
              </label>

              <label class="field">
                <span>Password <span class="required">*</span></span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  autocomplete="new-password"
                />
              </label>

              <label class="field">
                <span>Confirm Password <span class="required">*</span></span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  autocomplete="new-password"
                />
              </label>

              <button type="submit" class="btn-primary">Create Account →</button>
            </form>

            <p class="auth-switch">
              Already have an account? <a href="#login">Login</a>
            </p>
          </div>

          <div class="auth-side">
            <img
              src="src/assets/mountains.jpg"
              alt=""
              class="auth-side-image"
            />
            <p class="top-text">BOULDER, CO · EST. 1998</p>
            <h2 class="title">Where the Trail Begins.</h2>
            <p class="description">
              Premium outdoor gear and expert guidance for every adventure —
              from your first summit to your hundredth.
            </p>
          </div>
        </div>
      </section>
      ${h()}
    </div>`})),V,H=e((()=>{v(),S(),w(),E(),L(),B(),V={shop:x,about:_,"adventure-guides":C,contact:T,login:I,signup:z}}));function U(){let e=document.getElementById(`app-toast`);return e||(e=document.createElement(`div`),e.id=`app-toast`,e.className=`toast`,document.body.appendChild(e)),e}function W(e,t=`success`){let n=U();clearTimeout(K),n.className=`toast toast--${t} toast--visible`,n.innerHTML=`
    <span class="toast__icon">${t===`success`?`✓`:`⚠`}</span>
    <span class="toast__message">${e}</span>
    <button type="button" class="toast__close" aria-label="Dismiss">&times;</button>
  `,n.querySelector(`.toast__close`).addEventListener(`click`,G),K=setTimeout(G,4e3)}function G(){let e=document.getElementById(`app-toast`);e&&e.classList.remove(`toast--visible`),clearTimeout(K)}var K,q=e((()=>{}));t((()=>{n(),H(),d(),q(),P(),L(),B();var e=document.getElementById(`app`);function t(){return location.hash.slice(1)||`shop`}function r(){let n=t();e.innerHTML=(V[n]??V.shop)()}window.addEventListener(`hashchange`,r),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n}=t.dataset;if(n===`logout`)e.preventDefault(),o(),r(),W(`You have logged out successfully.`,`success`);else if(n===`toggle-menu`){let e=document.getElementById(`mobile-menu`),n=e.classList.toggle(`mobile-menu--open`);e.hidden=!n,t.setAttribute(`aria-expanded`,String(n))}}),e.addEventListener(`submit`,e=>{let t=e.target;t.dataset.form===`login`?(e.preventDefault(),F(t)):t.dataset.form===`signup`&&(e.preventDefault(),R(t))}),e.addEventListener(`input`,e=>{let t=e.target;if(!t.classList.contains(`invalid`))return;t.classList.remove(`invalid`);let n=t.closest(`form[data-form]`);n&&!n.querySelector(`input.invalid`)&&j(n.querySelector(`.form-feedback`))}),r()}))();