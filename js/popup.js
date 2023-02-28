let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');
let closeButton = document.querySelector('.popup-close');

loginButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', close);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};

function close(){
    loginPopUp.classList.remove('show-popup')
}

loginPopUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-popup')){
        close();
    }
})