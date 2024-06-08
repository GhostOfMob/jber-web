document.querySelector('.get_started').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.main_content').style.display = 'flex';
});

document.getElementById('register_btn').addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('guest_btn').addEventListener('click', function() {
    window.location.href = 'main.html';
});