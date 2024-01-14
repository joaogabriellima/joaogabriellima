import games from '../../../data/games.json'
import { type Game } from './types';

const loadGamesList = (): Game[] => {
  return games;
};

export default {
  loadGamesList
};
