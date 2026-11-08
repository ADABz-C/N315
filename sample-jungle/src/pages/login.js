export default function Login() {
    return /*html*/ `
<main class="auth-page auth-page--login">
    <div class="auth-card">
        <h1 class="auth-title" id="login-title">Login Here!</h1>

        <form class="auth-form" aria-labelledby="login-title" data-action="login">
            <div class="auth-field">
                <label for="login-email">Email Address</label>
                <input id="login-email" name="email" type="email" autocomplete="email" autocapitalize="none" spellcheck="false" required>
            </div>

            <div class="auth-field">
                <label for="login-password">Password</label>
                <input id="login-password" name="password" type="password" autocomplete="current-password" required>
            </div>

            <button class="auth-submit" type="submit">Login</button>
        </form>

        <p class="auth-switch">don’t have an account? <a href="#signup">Sign Up</a></p>
    </div>
</main>
`;
}