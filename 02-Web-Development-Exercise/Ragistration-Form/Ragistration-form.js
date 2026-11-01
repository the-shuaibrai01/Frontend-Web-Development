function validateForm() {

    // Name validation
    var name = document.getElementById("name").value.trim();
    var namePattern = /^[A-Za-z ]+$/;

    if (name.length < 6 || !namePattern.test(name)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // College
    var college = document.getElementById("college").value.trim();
    if (college === "") {
        alert("Please enter your college name.");
        return false;
    }

    // Email validation
    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Email ID.");
        return false;
    }

    // Phone number validation
    var phone = document.getElementById("phone").value.trim();
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    // Sex validation
    if (!document.getElementById("male").checked &&
        !document.getElementById("female").checked) {
        alert("Please select your gender.");
        return false;
    }

    // DOB validation
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day === "Day" || month === "Month" || year === "Year") {
        alert("Please select your complete Date of Birth.");
        return false;
    }

    // Languages validation
    var lang1 = document.getElementById("eng").checked;
    var lang2 = document.getElementById("tel").checked;
    var lang3 = document.getElementById("hin").checked;
    var lang4 = document.getElementById("tam").checked;

    if (!lang1 && !lang2 && !lang3 && !lang4) {
        alert("Please select at least one language.");
        return false;
    }

    // Address
    var address = document.getElementById("address").value.trim();
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}