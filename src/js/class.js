class Personne {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    get yourName() {
        return this.name;
    }
    get yourSurname() {
        return this.surname;
    }
    get ageIs() {
        if(this.age) return 0;
        return this.age;
    }

    set update(age) {
        if(this.age) this.age = age;
    }
}

class Actor extends Personne {
    constructor(personnalInfo, roleActor = 'inconnue') {
        let { name,surname,age } = personnalInfo;
        super( name, surname, age);
        this.role = roleActor;
    }
    get roleTheActor() {
        return this.role;
    }
}

let actor = new Actor({name:'mbring', surname:'jeremie', age:23}, "orchestre");
console.log(actor);
let personne = new Personne('bouba', 'bakari', 34);
personne.update = 34;

console.log(personne.yourName);
console.log(personne.age)
