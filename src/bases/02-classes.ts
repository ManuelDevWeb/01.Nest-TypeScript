import axios from 'axios';
import type { PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {
    constructor(
        private readonly id: number,
        private name: string,       
    ) {}

    get getName(): string {
        return this.name;
    }
    
    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }

    scream(): void {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<string> {
        const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);

        return data.name;
    }
}

const pikachu = new Pokemon(25, 'Pikachu');

const moves = await pikachu.getMoves();
console.log(moves);