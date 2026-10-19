import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { signUp } from "../auth.js";
import { isBlank, isValidEmail } from "../utils/validators.js";
import {
  showFormFeedback,
  clearFormFeedback,
  clearFieldErrors,
  markInvalid,
} from "../utils/formFeedback.js";

export const signup = () => `<div id="signup" class="home">
      ${renderNav()}
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
      ${renderFooter()}
    </div>`;

export function handleSignupSubmit(form) {
  const feedback = form.querySelector("#signup-feedback");
  const values = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
    confirmPassword: form.elements.confirmPassword.value,
  };

  clearFieldErrors(form);
  clearFormFeedback(feedback);

  const blankFields = Object.fromEntries(
    Object.entries(values).map(([key, val]) => [key, isBlank(val)]),
  );

  if (Object.values(blankFields).some(Boolean)) {
    showFormFeedback(feedback, "error", "Please complete all required fields.");
    markInvalid(form, blankFields);
    return;
  }

  if (!isValidEmail(values.email)) {
    showFormFeedback(feedback, "error", "Please enter a valid email address.");
    markInvalid(form, { email: true });
    return;
  }

  if (values.password.length < 8) {
    showFormFeedback(
      feedback,
      "error",
      "Password must be at least 8 characters.",
    );
    markInvalid(form, { password: true, confirmPassword: true });
    return;
  }

  if (values.password !== values.confirmPassword) {
    showFormFeedback(feedback, "error", "Passwords do not match.");
    markInvalid(form, { password: true, confirmPassword: true });
    return;
  }

  const result = signUp(values);

  if (!result.success) {
    showFormFeedback(feedback, "error", result.error);
    markInvalid(form, { email: true });
    return;
  }

  showFormFeedback(
    feedback,
    "success",
    "Account created successfully! Redirecting...",
  );
  form.querySelectorAll("input, button").forEach((el) => (el.disabled = true));

  setTimeout(() => {
    location.hash = "shop";
  }, 900);
}