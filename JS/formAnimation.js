const email = document.querySelector('input[type="email"]');
const emailText = document.querySelector('.email-text');
let emailValue = email.attributes.placeholder.value;
let emailCharacters = emailValue.split('');
const password = document.querySelector('input[type="password"]');
const passwordText = document.querySelector('.password-text');
let passwordValue = password.attributes.placeholder.value;
let passwordCharacters = passwordValue.split('');
let count=0;
function counter(text, type, characters) {
    if (count < characters.length) {
        text.innerHTML += `<p class="${type}-animation-${count}">${characters[count]}</p>`;
        count++;
        counter(text, type, characters);
    }
    else { };
};
let newCount=0;
function newCounter(data, type, characters) {
    data.attributes.placeholder.value = "";
    if (newCount < characters.length) {
        let newCharacter = document.querySelector(`.${type}-animation-${newCount}`);
        newCharacter.classList.add(`${type}-animation-${newCount}${newCount}`)
        newCount++;
        setTimeout(function() {newCounter(data, type, characters);}, 100);
    }
    else {};
};
email.addEventListener("click", (e)=>{
    e.preventDefault();
    if (count !== 0 || newCount !== 0){
        count=0;
        newCount=0; 
    };
    counter(emailText, "text", emailCharacters);
    newCounter(email, "text", emailCharacters);
});
password.addEventListener("click", (e)=>{
    e.preventDefault();
    if (count !== 0 || newCount !== 0){
        count=0;
        newCount=0; 
    };
    counter(passwordText, "password", passwordCharacters);
    newCounter(password, "password", passwordCharacters);
});