class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log('NO HAY NINGUN POKEMON QUE GRITE ASI!!!');
    }

    speak() {
        console.log('NO HAY NINGUN POKEMON QUE HABLE ASI!!!');
    }
}


// El decorator permite añadir o modificar el comportamiento de una clase, método o propiedad.
const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon
    }
}

// A la hora de crear una clase, el decorator se ejecuta antes de que se cree la instancia de la clase.
@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name:string,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();