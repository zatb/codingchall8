// U36432650

// Prevent the default form submission action to keep the page from reloading.
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Entering form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var eventDate = document.getElementById('eventDate').value;
    var preferences = [];
    document.querySelectorAll('input[name="preference"]:checked').forEach(function(checkbox) {
        preferences.push(checkbox.value);
    });

    // Validate that all fields are filled out. If any field is empty, display an alert.
    if (!name || !email || !eventDate || preferences.length === 0) {
        alert('Please fill out all fields.');
        return;
    }

    // Append the registration details to the display area upon successful form submission.
    var registrationDetails = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${preferences.join(', ')}</p>
    `;
    // Upon form submission, dynamically create elements within the registration display area to show the registrant’s name, email, selected event date, and preferences.
    document.getElementById('registrationDetails').innerHTML = registrationDetails;
});

