import styled from 'styled-components'
import { ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import FeaturesContext from '../store/features-context'
import { useContext } from 'react'


const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: url(https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg);
    background-size: cover;
    background-repeat: no-repeat;
`
const Shape = styled.div`
    background-color: white;
    clip-path: polygon(0% 0%, 0% 100%, 30% 100%, 50% 0);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  padding: 30px;
  margin: 10px 35px;
`
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 25px;
  margin: 10px 35px;
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
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
`
const ButtonCon = styled.div`
  padding: 30px;
  margin: 10px 35px;
`
const Shape1 = styled.div`
  background-color: #287886;
  clip-path: polygon(0 0, 90% 10%, 100% 100%, 100% 0);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const ToFeatures = () => {
  const featuresCtx = useContext(FeaturesContext);
  
  const clickHandler = () => {
    featuresCtx.changeReference("0");
  }
  
  return (
    <Container>
        <Shape>
          <Title>Переваги</Title>
          <Description>Ми пропонуємо різні способи<br/>допомогти просувати ваш<br/>бізнес онлайн.</Description>
          <ButtonCon>
            <Button to="/features" onClick={clickHandler}>Дізнатися більше<ArrowRightAlt/></Button>
          </ButtonCon>
        </Shape>
        <Shape1/>
    </Container>
  )
}

export default ToFeatures