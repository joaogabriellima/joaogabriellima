import React from 'react';
import { type Game } from '~/services/games/types';
import GameCard from '../GameCard';
import { Container } from './GamesList.styles';

interface GamesListViewProps {
  gamesList: Game[];
}

const GamesListView = ({ gamesList }: GamesListViewProps): JSX.Element => {
  return (
    <Container>
      {gamesList.map((game, index) => <GameCard game={game} key={index + Math.random()} />)}
    </Container>
  );
}

export default GamesListView
