import { useEffect, useContext } from 'react'
import FeaturesContext from '../store/features-context'
import { features } from '../data'
import Feature from '../components/Feature'
import { motion } from "framer-motion"

const Features = () => {
  const featuresCtx = useContext(FeaturesContext);
  useEffect(() => {
    if(featuresCtx.reference === "0" || featuresCtx.reference === "1") {
      window.scrollTo(0, 0);
    } else if (featuresCtx.reference === "2") {
      window.scrollTo(0, 2750);
    } else if (featuresCtx.reference === "3") {
      window.scrollTo(0, 3690);
    } else if (featuresCtx.reference === "4") {
      window.scrollTo(0, 4625);
    }
    
  }, [featuresCtx]);

  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
    >
      {features.map((item, index) => (
        <Feature item ={item} key={index}/>
      ))}
    </motion.div>
  )
}

export default Features