import styled from 'styled-components'
import { useEffect } from 'react';
import AboutIntro from '../components/AboutIntro';
import AboutEnding from '../components/AboutEnding';
import { motion } from "framer-motion"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const IntroCon = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;
`
const Shape1 = styled.div`
  background-color: #235374;
  clip-path: polygon(0 0, 15% 0, 2.5% 100%, 0% 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const Shape2 = styled.div`
  background-color: #235374;
  clip-path: polygon(0 0, 100% 0, 100% 25%, 0 2.5%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape4 = styled.div`
  background-color: #287886;
  clip-path: circle(10.0% at 90% 20%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape5 = styled.div`
  background-color: #235374;
  clip-path: polygon(0 75%, 100% 97.5%, 100% 100%, 0 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape3 = styled.div`
  background-color: #5159ac;
  clip-path: ellipse(2.5% 5% at 0% 0%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape6 = styled.div`
  background-color: #5159ac;
  clip-path: ellipse(2.5% 5% at 100% 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Shape7 = styled.div`
  background-color: #235374;
  clip-path: polygon(95% 32.5%, 90% 7.5%, 95% 7.5%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
  >
      <IntroCon>
        <Shape1/>
        <Shape4/>
        <Shape7/>
        <AboutIntro/>
      </IntroCon>
      <Container>
        <Shape2/>
        <Shape3/>
        <Shape5/>
        <Shape6/>
        <AboutEnding/>
      </Container>
    </motion.div>
  )
}

export default About