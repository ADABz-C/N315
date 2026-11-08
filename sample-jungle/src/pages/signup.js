export default function Signup() {
    return /*html*/ `
<main class="auth-page auth-page--signup">
    <div class="auth-card">
        <p class="auth-eyebrow">don’t have an account?</p>
        <h1 class="auth-title" id="signup-title">Sign Up!</h1>

        <form class="auth-form" aria-labelledby="signup-title" data-action="signup">
            <div class="auth-field">
                <label for="signup-first-name">First Name</label>
                <input id="signup-first-name" name="firstName" type="text" autocomplete="given-name" autocapitalize="words" required>
            </div>

            <div class="auth-field">
                <label for="signup-last-name">Last Name</label>
                <input id="signup-last-name" name="lastName" type="text" autocomplete="family-name" autocapitalize="words" required>
            </div>

            <div class="auth-field">
                <label for="signup-email">Email Address</label>
                <input id="signup-email" name="email" type="email" autocomplete="email" autocapitalize="none" spellcheck="false" required>
            </div>

            <div class="auth-field">
                <label for="signup-password">Password</label>
                <input id="signup-password" name="password" type="password" autocomplete="new-password" minlength="8" required>
            </div>

            <button class="auth-submit" type="submit">Sign Up</button>
        </form>

        <p class="auth-switch">already have an account? <a href="#login">Login</a></p>
    </div>
</main>
`;
}