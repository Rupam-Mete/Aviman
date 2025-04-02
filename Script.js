function redirectToPage() {
    window.location.href = "pleasbubu.html"; // Redirects to the new page
}

function goBack() {
    window.history.back(); // Navigates back to the previous page
}
document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["💙", "💖", "💜", "💗", "💓", "💕", "💞"];
    const numEmojis = 20; // Increased number of emojis

    for (let i = 0; i < numEmojis; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("love-emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // Randomize the starting position (anywhere on the page)
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;

        // Random animation speed (for more natural movement)
        emoji.style.animationDuration = `${Math.random() * 4 + 3}s`;
    }
});

