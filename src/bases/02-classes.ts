export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,       
    ) {}

    
    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }

    scream(): void {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }
}

const pikachu = new Pokemon(25, 'Pikachu');

console.log(pikachu.name);