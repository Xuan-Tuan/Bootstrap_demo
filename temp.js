function handleLogin() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'nxt' && password === '1234') {
      
      window.location.href = './main.html';
    } else {
      
      showAlert();
    }
  }

  function showAlert() {
    var alertElement = document.getElementById('alert');
    alertElement.classList.remove('d-none'); // Hiển thị alert

    // Tự động ẩn alert sau 3 giây (có thể điều chỉnh thời gian)
    setTimeout(function () {
      alertElement.classList.add('d-none'); // Ẩn alert
    }, 3000); // 3000 milliseconds = 3 seconds
  }
