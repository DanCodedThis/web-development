import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #fffbfb;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Description = styled.p`
  margin-bottom: 20px;
`
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const Contact = styled.div`
  display: flex;
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
const Title = styled.h3`
  font-weight: bold;
`
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`
const Discord = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%; 
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>D-FY.</Logo>
        <Description>Діджалітизуйте свій бізнес. Ми створили цю компанію, щоб допомогати бізнесу переходити до нової ера, ери онлайн. Наша мета дати змогу вам стати онлайн бізнесом.</Description>
      </Left>
      <Center>
        <Title>Станьте частиною нашої спільноти</Title>
        <Socials>
          <SIcon href="https://www.facebook.com/" color="3B5999">
            <Facebook/>
          </SIcon>
          <SIcon href="https://twitter.com/" color="55ACEE">
            <Twitter/>
          </SIcon>
          <SIcon href="https://www.instagram.com/" color="E4405F">
            <Instagram/>
          </SIcon>
          <SIcon href="https://discord.com/" color="7289DA">
            <Discord src="https://www.svgrepo.com/show/331368/discord-v2.svg"/>
          </SIcon>
        </Socials>
      </Center>
      <Right>
        <Title>Зв'яжіться з нами</Title>
        <Contacts>
          <Contact><Room/> вул. Гончарна, 2</Contact>
          <Contact><Phone/> +380123456789</Contact>
          <Contact><MailOutline/> defy@defybusiness.ua</Contact>
        </Contacts>
      </Right>
    </Container>
  )
}

export default Footer