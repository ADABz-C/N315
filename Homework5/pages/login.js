import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { login as authenticate } from "../src/auth.js";
import { isBlank, isValidEmail } from "../utils/validators.js";
import {
  showFormFeedback,
  clearFormFeedback,
  clearFieldErrors,
  markInvalid,
} from "../utils/formFeedback.js";

export const login = () => `<div id="login" class="home">
      ${renderNav()}
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
      ${renderFooter()}
    </div>`;

export function handleLoginSubmit(form) {
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const feedback = form.querySelector("#login-feedback");

  clearFieldErrors(form);
  clearFormFeedback(feedback);

  if (isBlank(email) || isBlank(password)) {
    showFormFeedback(feedback, "error", "Please complete all required fields.");
    markInvalid(form, { email: isBlank(email), password: isBlank(password) });
    return;
  }

  if (!isValidEmail(email)) {
    showFormFeedback(feedback, "error", "Please enter a valid email address.");
    markInvalid(form, { email: true });
    return;
  }

  const result = authenticate(email, password);

  if (!result.success) {
    showFormFeedback(feedback, "error", result.error);
    markInvalid(form, { email: true, password: true });
    form.elements.password.value = "";
    return;
  }

  showFormFeedback(feedback, "success", "You have logged in successfully.");
  form.querySelectorAll("input, button").forEach((el) => (el.disabled = true));

  setTimeout(() => {
    location.hash = "shop";
  }, 900);
}