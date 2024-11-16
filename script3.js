const wishes = [
    "Wishing you a day filled with love and joy!",
    "Happy Birthday! May all your dreams come true!",
    "Cheers to another year of wonderful memories!",
    "May your birthday be as amazing as you are!",
    "Here's to celebrating you on your special day!"
];

let currentWishIndex = 0;

function displayNextWish() {
    const wishElement = document.querySelector('.wish');
    wishElement.textContent = wishes[currentWishIndex];
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
}

// Display the first wish when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayNextWish();
});
