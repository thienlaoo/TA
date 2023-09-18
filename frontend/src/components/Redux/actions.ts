import { Hero } from "../types/Hero";

export const setHeroes = (heroes: Hero[]) => ({
    type: 'SET_HEROES',
    payload: heroes,
});