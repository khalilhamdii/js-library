modal = document.querySelector('#myModal');
const renderForm = () => {
    modal.style.display = "block";
  }

close = document.querySelector('.close');
close.addEventListener('click', function() {
    modal.style.display = "none";
});