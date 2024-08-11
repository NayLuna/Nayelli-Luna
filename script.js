// alert("Hola Mundo <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true, // se ejecutará todo el tiempo
    delay: 75,
});

// reconoces una acción porque tiene parentesis después del nombre de la acción
// a veces tiene el operador punto (.)
typewriter
    .pauseFor(2500) // milisegundos 2.5 segundos
    .typeString('Nayelli Luna')
    .pauseFor(300) // que haga una pausa
    // .deleteChars(10) // borrar letras
    .deleteAll () // debe llevar parentesis para que sea un método, ya que sin ellos es una propiedad
    .typeString('Desarrolladora FRONTED JR')
    .pauseFor(500)
    .deleteAll ()
    .typeString('Desarrollo de Negocios en el Área de Mercadotecnia')
    .pauseFor(250) // pausa para volver a escribir
    .start(); // inicia el efecto