import React from 'react'
import { Container, Description, Title } from './Games.styles'
import GamesList from './components/GamesList'

const GamesView = (): JSX.Element => {
  return (
    <Container>
      <Title>Games to Play</Title>
      <Description>
        Esse ano criei uma planilha para registrar os jogos e platinas que eu fiz. {'\n'}
        Gostei tanto da ideia que decidi transferir para um site, dessa forma ficaria mais visual e melhor para vocês também acompanharem.
        Espero que gostem tanto quanto eu!
      </Description>
      <GamesList />
    </Container>
  )
}

export default GamesView
