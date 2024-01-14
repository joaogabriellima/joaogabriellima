import React from 'react'
import {
  ConclusionLevel,
  GameCardContainer,
  GameImage,
  GameInfoContainer,
  GameStatus,
  GameTitle
} from './GameCard.styles'
import { type Game } from '~/services/games/types'

interface GameCardProps {
  game: Game
}

const GameCardView = ({ game }: GameCardProps): JSX.Element => {
  return (
    <GameCardContainer>
      <GameImage src={game.imageUrl} alt={game.name} />
      <GameInfoContainer>
        <GameTitle>{game.name}</GameTitle>
        <GameStatus>Status: {game.status}</GameStatus>
        <ConclusionLevel>Conclusion: {game.conclusionLevel}</ConclusionLevel>
      </GameInfoContainer>
    </GameCardContainer>
  )
}

export default GameCardView;
