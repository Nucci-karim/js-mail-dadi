// esercizio email

let emailUser = prompt("Scrivi la tua email")

const emailConcesse = ["sonopaolo@gmail.com", "nuovamail@email.com", "lamiamail@mail.com"]

if(emailUser == emailConcesse[0]){

    document.getElementById('frase').innerHTML = `Congratulazioni puoi continuare la tua navigazione`

} else if(emailUser == emailConcesse[1]){

    document.getElementById('frase').innerHTML = `Congratulazioni puoi continuare la tua navigazione`

} else if(emailUser == emailConcesse[2]){

    document.getElementById('frase').innerHTML = `Congratulazioni puoi continuare la tua navigazione`
}
 else{
    document.getElementById('frase').innerHTML = `Mi dispiace ma non puoi continuare la tua navigazione`
}