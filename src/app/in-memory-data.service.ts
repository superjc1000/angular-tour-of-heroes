import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Peñetazo' },
      { id: 13, name: 'Bofetacus' },
      { id: 14, name: 'Capitan calatayud' },
      { id: 15, name: 'Alfonso el espabilao' },
      { id: 16, name: 'Cassaieta woman' },
      { id: 17, name: 'Er Toro' },
      { id: 18, name: 'Mesie fganses' },
      { id: 19, name: 'Asmorsaret girl' },
      { id: 20, name: 'El Aberroncho' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}