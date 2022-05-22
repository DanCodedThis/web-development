import styled from 'styled-components'
import { ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: url(https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg);
    background-size: cover;
    background-repeat: no-repeat;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  padding: 25px;
  margin: 35px 35px;
`
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 25px;
  margin: 35px 35px;
`
const Button = styled(Link)`
    border: none;
    width: 100%;
    padding: 12px 20px;
    font-size: 20px;
    font-weight: 500;
    background-color: #235374;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;  
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
`
const Shape1 = styled.div`
    flex: 1;
    clip-path: polygon(0 0, 100% 0, 0 55%);
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: white;
`
const Shape2 = styled.div`
    flex: 1;
    clip-path: polygon(100% 100%, 100% 45%, 0% 100%);
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: white;
    display: flex;
    align-items: flex-end;
    justify-content: end;
`
const ButtonCon = styled.div`
  padding: 100px;
  margin: 25px 125px;
`
const Shape3 = styled.div`
  background-color: #235374;
  clip-path: polygon(100% 20%, 100% 0, 0 0);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape4 = styled.div`
  background-color: #235374;
  clip-path: polygon(100% 100%, 0 80%, 0 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const ToServices = () => {
  return (
    <Container>
      <Shape1>
        <Title>Послуги</Title>
        <Description>Дізнайтеся більше про те,<br/>які послуги ми можемо<br/>зробити для вас.</Description>
      </Shape1>
      <Shape2>
        <ButtonCon>
          <Button to="/services">Детальніше<ArrowRightAlt/></Button>
        </ButtonCon>
      </Shape2>
      <Shape3/>
      <Shape4/>
    </Container>
  )
}

export default ToServices