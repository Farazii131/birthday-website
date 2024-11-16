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
    startCountdown();
});

// Countdown timer logic
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2024-11-16T00:00:00').getTime(); // Ensure correct target time
    const updateCountdown = () => {
        const now = new Date().getTime();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            countdownElement.classList.add('hidden');
            document.getElementById('popup').classList.remove('hidden');
            document.querySelector('.content').classList.remove('hidden');
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function yesAction() {
    alert("Yes button clicked!");
}
