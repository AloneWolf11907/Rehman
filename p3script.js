// Example: Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    alert('Thank you for your message!');
    // You can add actual form submission logic here
  });