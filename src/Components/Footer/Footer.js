import React, { useContext } from 'react';
import { motion } from "framer-motion";
import FooterContainer from './FooterContainer';
const Footer = () => {
  return(
    <motion.div
    id="music"
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: true }}
    >
        <FooterContainer/>
    </motion.div>
  )
}

export default Footer;