let a = [2,3,4];
let b = [3,4,5,6];

let c = [...a,...b]; // concatenation de deux tableau

console.log(c); // resultat un object

// creation d'un object appartir des variables

let x = 4;
let y = 5;

const w = { x, y, z: x*y }; // creation d'un object appartir des varibles;

console.log(w);

// descontruction d'un object pour obtenir des variables

let user = {
    name: 'mbring',
    surname: 'jeremie',
    age: 19
};

let { name:n, surname:s, age: ag } = user;

console.log(`hello ${n} ${s} your age is ${ag}`);

const arow = ( a ) => console.log(a);

const salut = (name = "mbring") => {
    if(name.length > 10 ) {
        console.log("your a africain");
        return;
    }
    console.log("your not a africain");
}
salut("salut salut");
arow("hey");

// object traditionnal update in es6

const object = {
    init: () => console.log("hey i am")
};

object.init();