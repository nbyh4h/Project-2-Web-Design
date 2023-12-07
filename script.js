
  
  function updateDateTime() {
    var dateTimeContainer = document.getElementById("date-time");
    var greetingContainer = document.getElementById("greeting");

    var now = new Date();
    var hours = now.getHours();

    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = dayNames[now.getDay()];

    var formattedDate = now.toLocaleDateString();
    var formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    var emoji = hours < 12 ? "🌞" : "🌙"; 
    var greeting = hours < 12 ? "Good morning" : "Good evening";

    dateTimeContainer.textContent = currentDay + ", " + formattedDate + " " + formattedTime;
    greetingContainer.textContent = greeting + " " + emoji;
}
// Email Validation
function validateEmail(input) {
    const email = input.value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
}
	
    function validatePassword(input) {
        // Your password validation logic here
        // Example: Check if the password meets certain criteria
        var password = input.value;
        var passwordError = document.getElementById('passwordError');
        
        // Reset error message
        passwordError.textContent = '';

        // Example: Minimum length of 8 characters
        if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
        }
    }

    function validateConfirmPassword() {
        // Your confirm password validation logic here
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var confirmPasswordError = document.getElementById('confirmPasswordError');

        // Reset error message
        confirmPasswordError.textContent = '';

        // Example: Check if the passwords match
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
        }
    }

 function submitForm() {
            // Your form submission logic here
            // Check if the required fields are filled
            var fullName = document.getElementById('full name').value;
            var username = document.getElementById('username').value;
            var dateOfBirth = document.getElementById('date-of-birth').value;
            var mobileNumber = document.getElementById('mobile-number').value;
            var gender = document.getElementById('gender').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (fullName && username && dateOfBirth && mobileNumber && gender && email && password && confirmPassword) {
                // All required fields are filled, proceed with form submission

                // Display success pop-up (you can customize this part)
                alert('Registration successful!');

                // Reset the form
                document.querySelector('.registration-form').reset();
            } else {
                // Some required fields are missing, display an error message (you can customize this part)
                alert('Please fill in all required fields.');
            }
        }
		
		



