
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', function() {
      event.preventDefault();

      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');

      if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please enter both username and password');
        return;
      }


      window.location.href = '../home/index.html';
    });
  });
