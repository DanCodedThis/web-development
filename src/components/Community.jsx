import styled from 'styled-components'
import { ArrowRightAlt } from '@mui/icons-material'

const Container = styled.div`
  height: 100vh;
  display: flex;
`
const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Image = styled.img`
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  padding: 30px;
`
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 30px;
`
const Button = styled.a`
    border: none;
    width: 100%;
    padding: 12px 20px;
    font-size: 20px;
    font-weight: 500;
    background-color: #0e72a1;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
`
const ButtonCon = styled.div`
  padding: 30px;
`

const Community = () => {
  return (
    <Container>
      <Left>
        <Image src='https://www.svgrepo.com/show/331368/discord-v2.svg'/>
      </Left>
      <Right>
        <Title>Приєднуйтесь до нашої спільноти</Title>
        <Description>Приєднайтесь до нашої активної спільноти у Discord. Там наша спільнота зможе вам відповісти на ваші запитання у більш вільному форматі</Description>
        <ButtonCon>
          <Button href="https://discord.com/">Приєднатися до Discord<ArrowRightAlt/></Button>
        </ButtonCon>
      </Right>
    </Container>
  )
}

export default Community