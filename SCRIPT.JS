// script.js

// Mock database for storing users (for demonstration purposes)
const usersDB = [];

// Handle Sign Up
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Store the user in the "database" (for now, we'll just use a simple array)
  usersDB.push({ name, email, password });

  alert("Sign-up successful! Please login.");
  window.location.href = "index.html"; // Redirect to login page after successful sign-up
});

// Handle Login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Check if user exists in the mock database
  const user = usersDB.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login successful!");
    window.location.href = "resume.html"; // Redirect to resume builder after login
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

// Handle Resume Form Submission
document.getElementById("resume-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Collect data from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;

  // Show loading indicator
  document.getElementById("loading").classList.remove("hidden");

  // Hide output if it's visible
  document.getElementById("resume-output").classList.add("hidden");

  // Simulate a brief analysis delay
  setTimeout(function() {
    // Hide loading indicator
    document.getElementById("loading").classList.add("hidden");

    // Generate Resume Content
    const resumeContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Education:</strong> ${education}</p>
    `;

    // Simulate AI Analysis Content
    const analysisContent = `
      <p>Your resume looks great, but you might want to consider adding more quantifiable achievements in your experience section!</p>
    `;

    // Show the result
    document.getElementById("resume-content").innerHTML = resumeContent;
    document.getElementById("analysis-content").innerHTML = analysisContent;
    document.getElementById("resume-output").classList.remove("hidden");
  }, 2000);
});
