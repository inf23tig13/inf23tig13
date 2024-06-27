document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const article = this.previousElementSibling;
            const dots = article.querySelector('.dots');
            const moreText = article.querySelector('.more');

            if (dots.style.display === 'none') {
                dots.style.display = 'inline';
                this.textContent = 'Leia Mais';
                moreText.style.display = 'none';
            } else {
                dots.style.display = 'none';
                this.textContent = 'Leia Menos';
                moreText.style.display = 'inline';
            }
        });
    });
});
