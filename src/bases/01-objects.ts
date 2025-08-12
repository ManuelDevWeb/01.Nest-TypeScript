

// Las interfaces y tipos son una forma de definir la estructura de un objeto en TypeScript.
interface Pokemon {
    name: string;
    type: string;
    level: number;
    abilities: string[];
    stats?: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    },
    moves?: string[];
}

export const pikachu: Pokemon = {
    name: 'Pikachu',
    type: 'Electric',
    level: 25,
    abilities: ['Static', 'Lightning Rod'],    
    moves: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Iron Tail']
}

const pokemons: Pokemon[] = [];

pokemons.push(pikachu, {
    name: 'Charmander',
    type: 'Fire',
    level: 15,
    abilities: ['Blaze', 'Solar Power'],
    stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65
    },
    moves: ['Ember', 'Scratch', 'Growl']
});