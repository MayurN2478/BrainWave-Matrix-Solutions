document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Sign Up';
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Login';
});

// Placeholder for form submit (you can add your own validation or AJAX handling)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted!');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signup form submitted!');
});