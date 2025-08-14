import { type HttpAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';

import type { PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    constructor(
        private readonly id: number,
        private name: string,       
        private readonly pokeApiAdapter: HttpAdapter,
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

    async getMoves(): Promise<PokeAPIResponse> {
        const data = await this.pokeApiAdapter.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);

        return data;
    }
}

const pikachu = new Pokemon(25, 'Pikachu', new PokeApiAdapter());

const moves = await pikachu.getMoves();
console.log(moves);