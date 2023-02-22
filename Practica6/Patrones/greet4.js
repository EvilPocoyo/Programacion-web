module.exports = function Greetr(){
    this.greeting = 'Hello from the function constructor greet4';
    this.greet = function (){
        console.log(this.greeting);
    }
}