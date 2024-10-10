document.getElementById('formHero').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let nomeHeroi = document.getElementById('nomeHeroi').value;
    let xpHeroi = parseInt(document.getElementById('xpHeroi').value);

    let nivelHeroi;

    if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    
    document.getElementById('resultado').innerHTML = `O Herói de nome <strong>${nomeHeroi}</strong> está no nível de <strong>${nivelHeroi}</strong>.`;
});