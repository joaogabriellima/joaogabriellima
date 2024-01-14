import { useState } from 'react';
import GamesService from '~/services';
import { type Game } from '~/services/games/types';

interface GamesListViewModelReturnProps {
  gamesList: Game[];
  loadGames: () => void;
}

const GamesListViewModel = (): GamesListViewModelReturnProps => {
  const [gamesList, setGamesList] = useState<Game[]>([]);

  const loadGames = (): void => {
    const allGames = GamesService.loadGamesList();
    setGamesList(allGames);
  };

  return {
    gamesList,
    loadGames
  };
};

export default GamesListViewModel;
