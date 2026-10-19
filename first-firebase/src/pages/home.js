export default function home() {
    return /* html */`
        <div class="home">
            <h1>Welcome to the Home Page</h1>
            <div class="formContainer">
                <label for="username">Email:</label>
                <input type="email" id="email" name="username" required/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
                <button id="login">Sign Up</button>
            </div>
                <!-- <button id="login">Sign Up</button> -->
        </div>
    `
}