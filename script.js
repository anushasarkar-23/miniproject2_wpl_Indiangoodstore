document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('We will connect you soon!'); // Show confirmation message
    window.location.href = 'index.html'; // Redirect to home page
});
