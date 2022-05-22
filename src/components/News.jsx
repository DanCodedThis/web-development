import styled from "styled-components"
import { Newspaper, Facebook, Instagram, Twitter } from '@mui/icons-material'
import Newsletter from "./Newsletter"

const Container = styled.div`
  height: 100vh;
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const SizedNewspaper = styled(Newspaper)`
  transform: scale(12);
  color: white;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 30px;
`
const Description = styled.li`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const SIcon = styled.a`
  margin-right: 20px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const NewTitle = styled.h1`
  margin-top: 45px;
  font-size: 45px;
  font-weight: bold;
`
const List = styled.ul`
    list-style: none;
`

const News = () => {
  return (
    <Container>
      <Left>
        <SizedNewspaper/>
      </Left>
      <Right>
        <Title>Будьте в курсі останніх подій</Title>
        <List>
          <Description>
            <SIcon href="https://www.facebook.com/" color="3B5999"><Facebook/></SIcon>Читайте нас у фейсбуці
          </Description>
          <Description>
            <SIcon href="https://twitter.com/" color="55ACEE"><Twitter/></SIcon>Скрольте у твіттері
          </Description>
          <Description>
            <SIcon href="https://www.instagram.com/" color="E4405F"><Instagram/></SIcon>Дивіться у інстаграмі
          </Description>
        </List>
        <NewTitle>Або використовуйте...</NewTitle>
        <Newsletter/>
      </Right>
    </Container>
  )
}

export default News