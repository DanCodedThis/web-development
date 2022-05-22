import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from "../data"
import { ArrowLeft, ArrowRight, ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-right: 20px;
`
const TextContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: -225px 0px;
`
const Title = styled.h1`
    font-size: 70px;
    padding-left: 30px;
`
const Text = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    padding-left: 30px;
`

const Button = styled(Link)`
    border: none;
    width: 17.5%;
    height: 7.5%;
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
    margin-left: 30px;
`
const Shape1 = styled.div`
  background-color: #235374;
  clip-path: circle(10.0% at 90% 20%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape2 = styled.div`
  background-color: #287886;
  clip-path: polygon(80% 5%, 80% 15%, 90% 15%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const clickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
        <Shape1/>
        <Shape2/>
        <Arrow direction="left" onClick={() => clickHandler("left")}>
            <ArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <TextContainer>
                    <Title>{item.title}</Title>
                    <Text>{item.desc}</Text>
                    <Button to={item.to}>Більше<ArrowRightAlt/></Button>
                </TextContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => clickHandler("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider