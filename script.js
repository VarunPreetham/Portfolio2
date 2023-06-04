// Function to redirect the user to another link
function redirect() {
  window.location.href = "https://varunpreetham.github.io/Portfolio/about.html";
}

var redirectFlag = false; // Flag variable to track redirection

// Listen for scroll event
window.addEventListener("scroll", function() {
  // Check if the user has scrolled to the bottom of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !redirectFlag) {
    // Start the redirect process
    redirectFlag = true;
    document.getElementById("redirecting-text").style.display = "block"; // Show the redirecting text
    setTimeout(redirect, 1000); // Redirect after 1 seconds
  }
});

// Listen for the user navigating back
window.addEventListener("popstate", function(event) {
  // Check if the user is coming back from the redirected page
  if (event.state && event.state.redirected) {
    // Show a confirmation message or perform any other actions as needed
    alert("You have returned from the redirected page.");
  }
});

// Store the redirection state in the browser history
window.history.replaceState({ redirected: false }, "", "");

// Update the state when the redirect occurs
window.history.pushState({ redirected: true }, "", "");
