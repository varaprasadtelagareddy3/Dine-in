// Get the review form and existing reviews element
const reviewForm = document.querySelector('form');
const reviews = document.querySelector('#reviews ul');

// Function to display the existing reviews
function displayReviews() {
  // Get the reviews from a database or API
  const reviewsData = [
    { name: 'Santhosh', rating: 4, review: ' enough good.' },
    { name: 'Girish', rating: 5, review: 'Great.' },
    { name: 'Kruthik', rating: 4, review: 'Excellent Service.' },
    { name: 'Saketh', rating: 5, review: 'one of the best cafe ever visited.' },
    { name: 'Rachitha', rating: 5, review: 'Ambians is very good.' },
    { name: 'Meghallu', rating: 4, review: 'must try croissant.' },
    { name: 'Jeshwitha', rating: 5, review: 'must visit.' },
    { name: 'Samantha', rating: 4, review: 'decent place with good food.' },
];

// Clear the reviews element
reviews.innerHTML = '';

// Loop through the reviews data and add them to the reviews element
reviewsData.forEach(review => {
const ratingStars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
const li = document.createElement('li');

reviews.appendChild(li);
});
}

// Function to add a new review
function addReview(e) {
e.preventDefault();

// Get the form inputs
const name = document.querySelector('#name').value;
const rating = document.querySelector('#rating').value;
const review = document.querySelector('#review').value;

// Validate the inputs
if (name.trim() === '' || rating.trim() === '' || review.trim() === '') {
alert('Please fill in all fields.');
return;
}

// Save the review to a database or API
// ...

// Clear the form inputs
document.querySelector('#name').value = '';
document.querySelector('#rating').value = '';
document.querySelector('#review').value = '';

// Display the updated reviews
displayReviews();
}

// Display the existing reviews on page load
displayReviews();

// Add event listener to the review form submit button
reviewForm.addEventListener('submit', addReview);



