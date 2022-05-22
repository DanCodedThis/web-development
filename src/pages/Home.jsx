import ToFeatures from '../components/ToFeatures';
import Newsletter from '../components/Newsletter';
import ToServices from '../components/ToServices';
import Slider from "../components/Slider";
import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const NewsletterCon = styled.div`
  height: 30vh;
  overflow: hidden;
  position: relative;
`
const Shape = styled.div`
  background-color: #5159ac;
  clip-path: polygon(0 0, 0% 100%, 20% 50%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
  <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
  >
    <Slider/>
    <Container>
      <ToServices/>
    </Container>
    <Container>
      <ToFeatures/>
    </Container>
    <NewsletterCon>
      <Shape/>
      <Newsletter/>
    </NewsletterCon>
  </motion.div>
  );
}

export default Home