//var Emitter = require('./emitter');
var Emitter = require('events');
// Al ejecutar el codigo de arriba, no sucedio absolutamente nada

//Inyectamos el modulo config
var config = require('./config');

//Inyectamos el modulo Emitter
var emtr = new Emitter();

//Registramos los eventos con el mismo callback para dos diferentes tipos de eventos
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello')
});

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello')
})

//Emitimos el evento de tipo 'config.events.GREET' usando al objeto
emtr.emit(config.events.GREET)
console.log(emtr)