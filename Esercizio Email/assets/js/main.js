// esercizio email

let emailUser = prompt("Scrivi la tua email")

const emailConcesse = ["sonopaolo@gmail.com", "nuovamail@email.com", "lamiamail@mail.com"]

let soldatino = false

for(let i = 0; i < emailConcesse.length; i++){
    if( emailConcesse[i] == emailUser){
        soldatino = true
    }
}

if(soldatino = true){
    document.writeln("L'email è presente, buona navigazione")
} else {
    document.writeln("L'email non è presente, registrati")
}