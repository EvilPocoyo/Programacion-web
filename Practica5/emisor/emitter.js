//Este codigo emula un emisor de eventos sencillo
//Funcion constructora
function Emitter() {
    this.events = {};
}

//Al usar prototype se esta modificando el objeto
Emitter.prototype.on = function (type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type){
    if(this.events[type]) {
        this.events[type].forEach((listener)=> {
            listener();
        });
    }
}

//Estamos exportando el modulo 
module.exports = Emitter;