function registerUser() {
  event.preventDefault();

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  if (username.value || email.value || password.value || confirmPassword.value) {
    if (password.value === confirmPassword.value) {
      window.location.href = '../home/index.html'; 
    } else {
      alert('Passwords do not match');
    }

  }
else{
  alert('Please fill in all fields');
  }

}
registerUser;
