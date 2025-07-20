 

'use client'; 
 
import { useLottie } from "lottie-react";
 import animation from "../../../public/heroLotti.json"
import { motion } from 'framer-motion';
 
export default function HeroLotti() {
 

    const options = {
    animationData: animation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
 {View}
      </motion.div>

      
    </div>
  );
}
