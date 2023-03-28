document.getElementById('btn-invia').addEventListener('click', function(){
    document.getElementById("frase").innerHTML += `<p>Player: ${numeroDadoPlayer(1, 6)}</p>`

    document.getElementById("frase").innerHTML += `<p>Computer: ${numeroDadoCpu(1, 6)}</p>`

    if(numeroDadoCpu(1, 6) > numeroDadoPlayer(1, 6)){
        document.getElementById("vincitore").innerHTML = `<h1>Il computer ha vinto</h1>`

    } else if(numeroDadoCpu(1, 6) == numeroDadoPlayer(1, 6)){
        document.getElementById("vincitore").innerHTML = `<h1>C'è un pareggio</h1>`

    } else if(numeroDadoCpu(1, 6) < numeroDadoPlayer(1, 6)){
        document.getElementById("vincitore").innerHTML = `<h1>Il player vince</h1>`
    }

})

function numeroDadoPlayer(min, max){
    return Math.floor(Math.random() * max) + min
}

function numeroDadoCpu(min, max){
    return Math.floor(Math.random() * max) + min
}


console.log(numeroDadoCpu, numeroDadoPlayer)