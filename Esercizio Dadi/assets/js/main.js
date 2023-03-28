function numeroRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

document.getElementById('btn-invia').addEventListener('click', function(){
    let cpu = numeroRandom(1, 6);
    let player = numeroRandom(1, 6);

    document.getElementById("frase").innerHTML += `<p>Player: ${player}</p>`

    document.getElementById("frase").innerHTML += `<p>Computer: ${cpu}</p>`

    if(cpu > player){
        document.getElementById("vincitore").innerHTML = `<h1>Il computer ha vinto</h1>`

    } else if(cpu < player){
        document.getElementById("vincitore").innerHTML = `<h1>Il player vince</h1>`

    } else {
        document.getElementById("vincitore").innerHTML = `<h1>C'è un pareggio</h1>`
    }

})


console.log(numeroDadoCpu, numeroDadoPlayer)