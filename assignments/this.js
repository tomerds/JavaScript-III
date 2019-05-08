/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in the global binding scope, the value of this will be the console object
* 2. Implicit binding: when a function is called the preceeding object is the this
* 3. New bindind. This refers to the specific instance of the object that is returned by the constructor function
* 4. Explicit binding: When call or apply are used this is explicitly defined 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var name = 'Tomer';

function printGlobalScope(name) {
    console.log(this);
    return name;
};

printGlobalScope(name);


// Principle 2

// code example for Implicit Binding

var object = {
    name: 'Tomer',
    sayName: function () {
        return console.log(`Hello ${this.name}`);
    }
}

object.sayName();



// Principle 3

// code example for New Binding

function Constructor(att) {
    this.name = att.name;
    this.age = att.age;
}

var att1 = {
    name: 'Tomer',
    age: '23',
    hiddenAsset: 'I am hiding'
}

let newAtt = new Constructor(att1);

console.log(newAtt);

// Principle 4

// code example for Explicit Binding

function Speaker(att) {
    this.name = att.name;
    this.speak = function () {
        console.log(`Hello old ${this.name}`);
    };
};

var tomerObj = {
    name: 'Tomer'
};

var mirandaObj = {
    name: 'Miranda'
}

const tomer = new Speaker(tomerObj);

tomer.speak.call(mirandaObj);