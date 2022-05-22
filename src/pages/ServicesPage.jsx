import Advantages from '../components/Advantages';
import Services from '../components/Services';
import { useEffect } from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from "@mui/icons-material"
import { motion } from "framer-motion"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const ServicesCon = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;
`
const Shape0 = styled.div`
  clip-path: ellipse(52% 15% at 100% 0%);
  background-color: #235374;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape1 = styled.div`
  clip-path: ellipse(52% 15% at 0% 0%);
  background-color: #235374;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape2 = styled.div`
  clip-path: ellipse(50% 25% at 50% 100%);
  background-color: #235374;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape3 = styled.div`
  clip-path: polygon(10% 0, 0% 100%, 0 0);
  background-color: #2d8999;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape4 = styled.div`
  clip-path: polygon(100% 0, 100% 100%, 90% 0);
  background-color: #2d8999;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape5 = styled.div`
  clip-path: polygon(0 0, 0 15%, 50% 0);
  background-color: #5159ac;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape6 = styled.div`
  clip-path: polygon(50% 0, 100% 15%, 100% 0);
  background-color: #5159ac;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const ButtonCon = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const Button = styled.button`
    border: none;
    background-color: #2d8999;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`
const StyledKeyboardArrowDown = styled(KeyboardArrowDown)`
  color: white;
`

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const clickHandler = () => {
    document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
  >
      <ServicesCon>
        <Shape0/>
        <Shape1/>
        <Shape2/>
        <Services/>
        <ButtonCon><Button onClick={clickHandler}>Переваги<StyledKeyboardArrowDown/></Button></ButtonCon>
      </ServicesCon>
      <Container id='scroll'>
        <Shape3/>
        <Shape4/>
        <Shape5/>
        <Shape6/>
        <Advantages/>
      </Container>
    </motion.div>
  )
}

export default ServicesPage