const toggle = document.querySelector('.toggle-share');
const remove = document.querySelector('.remove-share');
const socialContainer = document.getElementById('socials');

function toggleShareComponent() {
  socialContainer.classList.toggle('none');
}

function removeShareComponent() {
  socialContainer.classList.add('none');
}

toggle.addEventListener('click', toggleShareComponent);
remove.addEventListener('click', removeShareComponent);