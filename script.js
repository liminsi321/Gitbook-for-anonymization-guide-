document.addEventListener("DOMContentLoaded", function() {
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.flashcard-inner').classList.toggle('flipped');
        });
    });
});
