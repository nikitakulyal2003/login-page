// Register a new user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username === '' || password === '') {
        showMessage('Please fill in both fields');
        return;
    }

    if (localStorage.getItem(username)) {
        showMessage('Username already exists');
        return;
    }

    localStorage.setItem(username, password);
    showMessage('Registration successful! You can now log in.', true);
}

// Login an existing user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        showMessage('Please fill in both fields');
        return;
    }

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === null) {
        showMessage('Username does not exist');
        return;
    }

    if (storedPassword === password) {
        showMessage('Login successful! Redirecting...', true);
        setTimeout(() => {
            window.location.href = 'secure.html'; // Redirect to secure page
        }, 2000);
    } else {
        showMessage('Incorrect password');
    }
}

// Show message to user
function showMessage(message, success = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = success ? 'green' : 'red';
}