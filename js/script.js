document.addEventListener('DOMContentLoaded', function() {
    const faqBoxes = document.querySelectorAll('.faq-box');

    faqBoxes.forEach(box => {
        const question = box.querySelector('.question');
        const answer = box.querySelector('.answer');
        const plusIcon = question.querySelector('.fa-plus');
        const minusIcon = question.querySelector('.fa-minus');

        question.addEventListener('click', function() {
            box.classList.toggle('active');
            if (box.classList.contains('active')) {
                answer.style.display = 'block';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            } else {
                answer.style.display = 'none';
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            }
        });
    });


    const navigationIcon = document.querySelector('.navigation-icon');
    const overlayMenu = document.querySelector('.overlay-menu');

    navigationIcon.addEventListener('click', function() {
        overlayMenu.classList.toggle('show-overlay-menu');
    });
});