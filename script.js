document.addEventListener("DOMContentLoaded", function() {
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.flashcard-inner').classList.toggle('flipped');
        });
    });
});


js <- HTML('
<script>
document.addEventListener("DOMContentLoaded", function() {
  function showBlueCard(index) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("active"));
    document.getElementById("card-" + index).classList.add("active");
    
    const dots = document.querySelectorAll(".card-nav span");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index - 1].classList.add("active");
  }
  window.showBlueCard = showBlueCard; // Make function globally available
});
</script>
')