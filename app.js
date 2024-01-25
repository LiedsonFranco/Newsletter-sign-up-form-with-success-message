function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
function check_email(){
    const email = document.getElementById('email').value
    console.log('Super')
    console.log(email)
    if(validarEmail(email)){
        document.querySelector('main').style.display = 'none'
        document.querySelector('section').style.display = 'flex'
        console.log('Is valid')
    }
    else{
        document.querySelector('.input-container').setAttribute('class', 'invalid-input')
    }
}