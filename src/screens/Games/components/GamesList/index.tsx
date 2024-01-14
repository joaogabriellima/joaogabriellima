import React, { useEffect } from 'react';
import GamesListView from './GamesList.view';
import GamesListViewModel from './GamesList.viewModel';

const GamesList = (): JSX.Element => {
  const { gamesList, loadGames } = GamesListViewModel();

  useEffect(() => {
    loadGames();
  }, []);

  return <GamesListView
    gamesList={gamesList}
  />
};

export default GamesList;
