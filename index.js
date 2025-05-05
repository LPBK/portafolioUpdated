//declaring variables
let score1=document.getElementById("score1");
let score2=document.getElementById("score2");
let periodoCount=document.getElementById("periodoCount");
let restante=document.getElementById("restante");
const pause=document.getElementById("pause");
const nuevoJuego=document.getElementById("nuevoJuego");
const desempate=document.getElementById("desempate");
const revancha=document.getElementById("revancha")
let team1Ed=document.getElementById("team1Ed");
let team2Ed=document.getElementById("team2Ed");
let timerRunning=false;
let count1=0;
let count2=0;
let period=1;
//nombre de jugadores 
team1=prompt("Por favor ingrese el nombre del equipo 1");
team2=prompt("Por favor ingrese el nombre del equipo 2");
team1Ed.textContent=team1;
team2Ed.textContent=team2;
//declaring fuction that reduces time
let timer;
let tiempo=720;
function countdown(){
    clearInterval(timer);
     timerRunning=true;
     timer=setInterval(()=>{
        if(tiempo>0 && period<=4){
            tiempo--;
            let minutos=String(Math.floor(tiempo/60)).padStart(2,"0");
            let segundos=String(Math.floor(tiempo%60)).padStart(2,"0");
            restante.textContent=`${minutos}:${segundos}`;
        }
        else{
            clearInterval(timer)
            alert("termino el tiempo, por favor inicie un nuevo set");
            timerRunning=false
        }
    },1000)
}
    //declaring add +1 team 1
    const team1Plus1=document.getElementById("team1Plus1").addEventListener("click",()=>{
        if(timerRunning){
            count1++;
            score1.textContent=count1;
        }
    });
    //declaring add +2 team 1
    const team1Plus2=document.getElementById("team1Plus2").addEventListener("click",()=>{
        if(timerRunning){
            count1=count1+2;
            score1.textContent=count1;
        }
    });
    //declaring add +3 team 1
    const team1Plus3=document.getElementById("team1Plus3").addEventListener("click",()=>{
        if(timerRunning){
            count1=count1+3;
            score1.textContent=count1;
        }
    });
        //declaring add +1 team 2
    const team2Plus1=document.getElementById("team2Plus1").addEventListener("click",()=>{
        if(timerRunning){
            count2++;
            score2.textContent=count2;
        }
    });
    //declaring add +2 team 2
    const team2Plus2=document.getElementById("team2Plus2").addEventListener("click",()=>{
        if(timerRunning){
            count2=count2+2;
            score2.textContent=count2;
        }
    });
    //declaring add +3 team 
    const team2Plus3=document.getElementById("team2Plus3").addEventListener("click",()=>{
        if(timerRunning){
            count2=count2+3;
            score2.textContent=count2;
        }
    });
//declaring  timer and start button.
const start=document.getElementById("iniciar").addEventListener("click",()=>{
    countdown()
    pause.textContent="PAUSA";
});
//declaring new set
const nuevoSet=document.getElementById("nuevoSet").addEventListener("click",()=>{
    if(tiempo==0 && period<4){
        period++;
        periodoCount.textContent=`${period}/4`;
        tiempo=720;
        let minutos=String(Math.floor(tiempo/60)).padStart(2,"0");
        let segundos=String(Math.floor(tiempo%60)).padStart(2,"0");
        restante.textContent=`${minutos}:${segundos}`;
    }
    else if(tiempo==0 &&period==4){
        alert("termino el tiempo, y no hay mas sets disponibles,por favor click en  revancha o nuevo juego")
    }
});
pause.addEventListener("click",()=>{
    if(pause.textContent=="PAUSA"){
        clearInterval(timer)
        pause.textContent="PLAY";
    }
    else if(pause.textContent="PLAY"){
        countdown()
        pause.textContent="PAUSA";
    }
    
})
nuevoJuego.addEventListener("click",()=>{
    if(tiempo==0 && period==4){
        team1=prompt("Por favor ingrese el nombre del equipo 1");
        team2=prompt("Por favor ingrese el nombre del equipo 2");
        team1Ed.textContent=team1;
        team2Ed.textContent=team2;
        count1=0;
        count2=0;
        period=1;
        periodoCount.textContent=`${period}/4`;
        tiempo=720;
        let minutos=String(Math.floor(tiempo/60)).padStart(2,"0");
        let segundos=String(Math.floor(tiempo%60)).padStart(2,"0");
        restante.textContent=`${minutos}:${segundos}`;
    }
})
desempate.addEventListener("click",()=>{
    if(count1==count2 && tiempo==0 && period==4){
        period=3;
        period++
        periodoCount.textContent=`5/4`;
        tiempo=720;
        let minutos=String(Math.floor(tiempo/60)).padStart(2,"0");
        let segundos=String(Math.floor(tiempo%60)).padStart(2,"0");
        restante.textContent=`${minutos}:${segundos}`;
    }
})
revancha.addEventListener("click",()=>{
    if(period==4 && tiempo==0 && count1>count2||count2>count1){
        count1=0;
        count2=0;
        period=1;
        periodoCount.textContent=`${period}/4`;
        tiempo=720;
        let minutos=String(Math.floor(tiempo/60)).padStart(2,"0");
        let segundos=String(Math.floor(tiempo%60)).padStart(2,"0");
        restante.textContent=`${minutos}:${segundos}`;
        score1.textContent=count1;
        score2.textContent=count2;
    }
})
