var Construtor = function (name) {
    this.name = name;
};

Construtor.prototype.method1 = function() {};
Construtor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Construtor('instance');
console.log(Construtor);
console.log(instance);

