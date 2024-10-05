

document.addEventListener("DOMContentLoaded", function() {
    // Handling the submit button click to show the modal
    document.getElementById("open").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission if it's inside a form

        // Display the modal
        document.getElementById("popupModal").style.display = "flex";
    });

    // Close the modal when the OK button is clicked and redirect to home page
    document.getElementById("okBtn").addEventListener("click", function() {
        // Hide the modal
        document.getElementById("popupModal").style.display = "none";

        // Redirect to home page
        window.location.href = "index.html"; // Change this to your desired page
    });

    // Close the modal when clicking on the close button (×)
    document.querySelector(".close-btn").addEventListener("click", function() {
        document.getElementById("popupModal").style.display = "none";
    });
});

