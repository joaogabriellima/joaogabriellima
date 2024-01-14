import React from 'react';
import GameCardView from './GameCard.view';
import { type Game } from '~/services/games/types';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps): JSX.Element | null => {
  if (!game) return null;

  return <GameCardView game={game} />
};

export default GameCard;
