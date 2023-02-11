let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};

let closePopup = document.querySelector('.form-close');

closePopup.addEventListener('clic', () => {
    loginPopUp.style.display = 'none'
});