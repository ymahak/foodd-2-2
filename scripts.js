document.addEventListener('DOMContentLoaded', () => {
    // DOM Manipulation Example: Update Content
    const updateReviewContent = () => {
        const reviewsContainer = document.querySelector('.reviews-container');
        // Add a new review dynamically
        const newReview = document.createElement('div');
        newReview.className = 'review-box';
        newReview.innerHTML = `
            <p class="review-text">"Amazing experience! The delivery was prompt and the food was exceptional."</p>
            <div class="reviewer-info">
                <img src="images/client4.avif" alt="New Client Photo" class="reviewer-photo">
                <div class="reviewer-name">Aman</div>
                <div class="reviewer-role">Happy Customer</div>
            </div>
        `;
        reviewsContainer.appendChild(newReview);
    };

    updateReviewContent();

    // Event Handling Example: Button Click
    document.querySelector('#login-p').addEventListener('click', () => {
        alert('Welcome to Login Page!');
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });

    // Local Storage Example: Save Form Data
    form.addEventListener('input', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        localStorage.setItem('formData', JSON.stringify({ name, email, phone, message }));
    });

    // Load saved form data from local storage
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('name').value = savedData.name || '';
        document.getElementById('email').value = savedData.email || '';
        document.getElementById('phone').value = savedData.phone || '';
        document.getElementById('message').value = savedData.message || '';
    }
});


