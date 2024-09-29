let conteo1=0;
let conteo2=0;
let score1=document.getElementById("score-team1")
let  score2=document.getElementById("score-team2")
function team1add1(){
    conteo1 += 1;
    score1.textContent = conteo1
}
function team1add2(){
    conteo1 += 2;
    score1.textContent = conteo1
}
function team1add3(){
    conteo1 += 3;
    score1.textContent = conteo1
}
function team2add1(){
    conteo2 += 1;
    score2.textContent = conteo2
}
function team2add2(){
    conteo2 += 2;
    score2.textContent = conteo2
}
function team2add3(){
    conteo2 += 3;
    score2.textContent = conteo2
}
let Intervalo;

function startCountdown() {
    // Tiempo en segundos (ejemplo: 5 minutos = 300 segundos 5*60=300)
    let tiemporestante = 720; 
    countdownInterval = setInterval(function () {
        // Calcular minutos y segundos
        let minutos = Math.floor(tiemporestante / 60);
        let segundos = tiemporestante % 60;

        // Formatear minutos y segundos para que siempre muestren dos dígitos
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        // Mostrar el tiempo en pantalla
        document.getElementById("game-timer").textContent = `${minutos}:${segundos}`;

        // Reducir el tiempo en 1 segundo
        tiemporestante--;

        // Detener el temporizador cuando llegue a cero
        if (tiemporestante < 0) {
            clearInterval(countdownInterval);
            document.getElementById("game-timer").textContent = "00:00";
            alert("¡El tiempo se ha acabado!");
        }
    }, 1000); // Actualizar cada 1000 ms (1 segundo)
}
function nextPeriod(){
    clearInterval(countdownInterval);
    let period=1;
    let periodo = document.getElementById("current-period").textContent = period += 1;
    document.getElementById("game-timer").textContent = "12:00";
}
function newmatch(){
    conteo1 = 0;
    score1.textContent = conteo1
    conteo2 = 0;
    score2.textContent = conteo1
    let period=1
    clearInterval(countdownInterval);
    document.getElementById("game-timer").textContent = "12:00";
    document.getElementById("current-period").textContent=period
}