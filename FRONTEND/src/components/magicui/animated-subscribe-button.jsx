'use client';

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedSubscribeButton = ({
  buttonColor = 'bg-gray-800', // default to match your dark theme
  subscribeStatus = false,
  buttonTextColor = 'text-white', // default to white text for visibility on dark background
  changeText = 'Unsubscribe',
  initialText = 'Subscribe',
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[200px] items-center justify-center overflow-hidden rounded-md p-[10px] outline outline-1 outline-gray-700"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonTextColor }}>
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}>
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
