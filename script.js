document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation here
    // You can check the entered username and password against a database, for example
  
    if (username === "admin" && password === "password") {
      // Login successful, redirect to the main page
      window.location.href = "main.html";
    } else {
      // Login failed, display an error message
      alert("Invalid username or password. Please try again.");
    }
  });
  