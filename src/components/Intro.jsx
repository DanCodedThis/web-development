import styled from 'styled-components'
import { MailOutline, Phone, Room, ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Button = styled(Link)`
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
const SizedMailOutline = styled(MailOutline)`
  flex: 1;
  transform: scale(8);
  color: white;
  margin-right: 225px;
`
const SizedRoom = styled(Room)`
  flex: 1;
  transform: scale(8);
  color: white;
  margin-right: 225px;
`
const SizedPhone = styled(Phone)`
  flex: 1;
  transform: scale(8);
  color: white;
  margin-left: 225px;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Зв'яжіться з нами</Title>
        <Description>Приходьте до нас у офіс <b>вул. Гончарна, 2</b> (з 9:00-17:00)<br/>Або подзвоніть нам за номером <b>+380123456789</b> (з 9:00-17:00)<br/>Також маєте змогу написати нам листа <b>defy@defybusiness.ua</b></Description>
        <ButtonCon>
          <Button to="/meet">Замовити дзвінок<ArrowRightAlt/></Button>
        </ButtonCon>
      </Left>
      <Right>
        <Wrapper>
          <SizedRoom/>
          <SizedPhone/>
          <SizedMailOutline/>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default Intro