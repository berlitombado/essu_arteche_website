// ========================================
// CONTACT FORM JAVASCRIPT
// ========================================

// Select the contact form
const form = document.getElementById("contactForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // ========================================
    // GET FORM VALUES
    // ========================================

    // Get Full Name
    const fullName = document
        .getElementById("fullname")
        .value
        .trim();

    // Get Email
    const email = document
        .getElementById("email")
        .value
        .trim();

    // Get Course
    const course = document
        .getElementById("course")
        .value;

    // Get selected Gender
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Get Message
    const message = document
        .getElementById("message")
        .value
        .trim();


    // ========================================
    // GET SELECTED INTERESTS
    // ========================================

    const interests = [];

    document
        .querySelectorAll('input[name="interests"]:checked')
        .forEach(function (checkbox) {

            interests.push(checkbox.value);

        });


    // ========================================
    // VALIDATION
    // ========================================

    // Validate Full Name
    if (fullName === "") {

        alert("Please enter your full name.");

        return;
    }


    // Validate Email
    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    // Validate Email Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // Validate Course
    if (course === "") {

        alert("Please select your course.");

        return;
    }


    // Validate Gender
    if (!gender) {

        alert("Please select your gender.");

        return;
    }


    // Validate Interests
    if (interests.length === 0) {

        alert("Please select at least one interest.");

        return;
    }


    // Validate Message
    if (message === "") {

        alert("Please enter your message.");

        return;
    }


    // ========================================
    // SUCCESS ALERT
    // ========================================

    alert(
        "Form Submitted Successfully!\n\n" +
        "Name: " + fullName + "\n" +
        "Email: " + email + "\n" +
        "Course: " + course + "\n" +
        "Gender: " + gender.value + "\n" +
        "Interests: " + interests.join(", ") + "\n" +
        "Message: " + message
    );
});