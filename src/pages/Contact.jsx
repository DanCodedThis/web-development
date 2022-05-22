import Intro from '../components/Intro'
import Community from '../components/Community'
import News from '../components/News'
import styled from 'styled-components'
import { useEffect } from 'react';
import { motion } from "framer-motion"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const IntroShape = styled.div`
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #235374;
`
const CommunityShape = styled.div`
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #5865F2;
`
const NewsShape = styled.div`
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #5159ac;
`
const IntroCon = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;
`

const Contact = () => {
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
        <Intro/>
        <IntroShape/>
      </IntroCon>
      <Container>
        <Community/>
        <CommunityShape/>
      </Container>
      <Container>
        <News/>
        <NewsShape/>
      </Container>
    </motion.div>
  )
}

export default Contact