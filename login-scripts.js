
// Show the login form and hide the register form
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

// Show the register form and hide the login form
function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

// Simulate user registration (store the username and password)
function register(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        // Save the user details in localStorage for simplicity
        localStorage.setItem('registeredUser', JSON.stringify({ username, password }));
        alert('Registration successful! You can now log in.');
        showLogin();
    }
}

// Simulate login (check username and password)
function login(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Store the logged-in user's name in localStorage and redirect to the index page
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirect to the index page
    } else {
        alert('Incorrect username or password!');
    }
}


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});






