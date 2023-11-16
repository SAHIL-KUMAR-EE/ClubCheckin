// script.js

// Get the current date

var currentDate = new Date();

// Format the date as "DD MMM YYYY" (e.g., "01 Jan 2023")
var options = { day: '2-digit', month: 'short', year: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the content of the h5 element with the current date
document.getElementById('datePlaceholder').textContent = formattedDate;


document.getElementById('showModalButton').addEventListener('click', function() {
$('#exampleModal').modal('show');
});

document.getElementById('closebutton1').addEventListener('click', function() {
// Perform any save-related actions here

// Close the modal
$('#exampleModal').modal('hide');
});

document.getElementById('closebutton2').addEventListener('click', function() {
// Perform any save-related actions here

// Close the modal
$('#exampleModal').modal('hide');
});

function login() {
    var email = document.getElementById('email').value;
    console.log(email);
    var password = document.getElementById('password').value;

    if (email.endsWith("@pec.edu.in")) {
        // Redirect to another page with a welcome alert
        alert("Welcome!");
        
        window.location.href = "dashboard.html";
        // You can use window.location.href to redirect to another page
        // window.location.href = "another-page.html";
    } else {
        // Display an alert for invalid ID
        alert("Invalid ID");
    }

}

function saveChanges() {
    // Get data from modal inputs
    var title = document.getElementById('titleInput').value;
    console.log(title);
    var message = document.getElementById('messageInput').value;
    var club = document.getElementById('clubInput').value;

    // Prepare data for backend
    var data = {
        title: title,
        message: message,
        club: club
    };

    // Send data to backend
    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Handle success response from backend
        console.log('Success:', data);

        // Close the modal
        $('#exampleModal').modal('hide');

        // You can perform additional actions here, such as updating the dashboard.
        // For simplicity, you may want to reload the entire dashboard or update
        // the displayed data dynamically without a page reload.
    })
    .catch((error) => {
        // Handle error
        console.error('Error:', error);
    });
}