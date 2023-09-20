import { Hero } from "../types/Hero";

export const setHeroes = (heroes: Hero[]) => ({
    type: 'SET_HEROES',
    payload: heroes,
});

export const updateHero = (heroId: string, updatedData: Hero) => ({
    type: 'UPDATE_HERO',
    payload: { heroId, updatedData },
  });