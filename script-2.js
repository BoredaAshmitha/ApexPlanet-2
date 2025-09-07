// Select the form
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (event) {
  // Stop form from submitting immediately
  event.preventDefault();

  // Get the input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate name
  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  // Validate email
  if (email === '' || !emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate message
  if (message === '') {
    alert('Please enter a message.');
    return;
  }

  // If everything is valid:
  alert('Form submitted successfully!');
  form.reset(); // clear the form
});
