const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dias = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];

    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear()
    let fechaText = `${diaSemana}, ${mes} ${dia} ${año}`
    document.getElementById('fecha').innerHTML = fechaText;

    document.getElementById('container').classList.toggle('animar');

    //La propiedad de toggle aplica una ez si y otra vez no la clase de css que le paso entre parentesis, en este caso, como la funcion se está mandando a llamar cada segundo, me lo muestra un seg si y al otro no.
}

const formatoHora = (hora) => {
    if(hora < 10) 
        hora = '0' + hora;
        
    return hora;
}

setInterval(mostrarReloj, 1000);