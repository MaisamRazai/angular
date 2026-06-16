import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(currentHero => currentHero.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = HEROES;
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }
}
