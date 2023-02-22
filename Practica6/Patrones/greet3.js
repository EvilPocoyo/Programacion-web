function Greetr(){
    this.greeting = 'hello from de function constructor';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr;