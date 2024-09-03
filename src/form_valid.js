document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(errorDiv) {
        errorDiv.textContent = '';
    });

    // Get form field values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var course = document.getElementById('course').value;

    var isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate mobile
    var mobilePattern = /^\d{10}$/;
    if (!mobile || !mobilePattern.test(mobile)) {
        document.getElementById('mobile-error').textContent = 'Please enter a valid 10-digit mobile number.';
        isValid = false;
    }
    if (!course) {
        document.getElementById('course-error').textContent = 'Please select a course.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});