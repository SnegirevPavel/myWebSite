
document.querySelector('.mobile div').addEventListener('click', () => {
    document.querySelector('.mobile div').classList.toggle('active');
    document.querySelector('.mobile nav').classList.toggle('open');
    document.querySelector('.mobile nav ul').classList.toggle('show');
});