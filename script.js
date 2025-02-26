document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});

const clinicBtn = document.getElementById('clinicBtn');
const educationBtn = document.getElementById('educationBtn');
const clinicContent = document.getElementById('clinicContent');
const educationContent = document.getElementById('educationContent');

clinicBtn.addEventListener('click', () => {
    clinicBtn.classList.add('active');
    educationBtn.classList.remove('active');
    clinicContent.classList.add('active');
    educationContent.classList.remove('active');
});

educationBtn.addEventListener('click', () => {
    educationBtn.classList.add('active');
    clinicBtn.classList.remove('active');
    educationContent.classList.add('active');
    clinicContent.classList.remove('active');
});


document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});