'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const MotionDiv: React.FC<{ children: ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0 + index * 0.25, ease: 'easeInOut', duration: 0.3 }}
      viewport={{ amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
