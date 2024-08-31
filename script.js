
document.getElementById('readMoreBtn').addEventListener('click', function () {
    $('#exampleModal').modal('show');
});

function toggleSelected(card) {
    var allCards = document.querySelectorAll('.card');
    allCards.forEach(function (card) {
        card.classList.remove('selected');
    });

    card.classList.add('selected');
}