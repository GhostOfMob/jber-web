document.getElementById('showRegister').addEventListener('click', function () {
    document.querySelector('.log-in-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.log-in-container').style.display = 'flex';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Handle login logic here
    alert(`Logged in with email: ${email}`);
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Handle registration logic here
    alert(`Registered with email: ${email}`);
});