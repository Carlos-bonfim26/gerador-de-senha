
function getCharTypes(){
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    const charTypes= [];

    if(uppercase){
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if(lowercase){
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }
    if(number){
        charTypes.push('1234567890');
    }
    if(specialCharacter){
        charTypes.push('@#$&_-./');
    }
    return charTypes;

}
function getPasswordSize(){
    const size = document.querySelector('#size').value;
 if(isNaN(size) || size < 4 || size > 128){
    message('tamanho inválido, digite um número entre 4 e 128', 'warning')
 } 
    return size;

}

function randomCharType(charTypes){
    const ramdomIndex = Math.floor(Math.random() * charTypes.length);
    charTypes[ramdomIndex] 
    return charTypes[ramdomIndex][Math.floor(Math.random() * charTypes[ramdomIndex].length)];
}
    
function generatePassword(size, charTypes){
    let passwordGenerated = '';

    while(passwordGenerated.length < size){
       passwordGenerated += randomCharType(charTypes);
    }
    return passwordGenerated;
}
function message(text, status = 'success'){
    Toastify({
        text: text, duration: 3000, style:{
            background: status === 'success' ? '#84cc16': '#dc2626',
            boxShadow: 'none'
        }
    }).showToast();
}
document.querySelector('#generate').addEventListener('click', function(){

    const size = getPasswordSize();
    const charTypes = getCharTypes();

    
    if(!size){
        return;
    }
if(!charTypes.length){
    message('selecione pelo menos um tipo de caractere!', 'warning');
    return;
}
const passwordGenerated = generatePassword(size, charTypes);
    document.querySelector('#password_container').classList.add('show')
    document.querySelector('#password').innerHTML = passwordGenerated;
});

document.querySelector('#copy').addEventListener('click', function(){
    navigator.clipboard.writeText(document.querySelector('#password').innerHTML);
    message('senha copiada com sucesso', 'success');
})