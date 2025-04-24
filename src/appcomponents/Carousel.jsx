import { useActiveUser } from "@/contexts/ActiveUser";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const Carousel = () => {
  const { active } = useActiveUser();
  const favourites = active.favourites;
  const clonedSlides = [favourites[favourites.length - 1], ...favourites, favourites[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [intervalId, setIntervalId] = useState(null); // Track interval

  // Set interval for slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    setIntervalId(interval);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle hover start and end
  const handleMouseEnter = () => {
    setIsHovered(true); // Pause the animation
    clearInterval(intervalId); // Stop slide change on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume the animation
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    setIntervalId(interval); // Restart interval after hover
  };

  // Handle transition end to reset the animation and move to the first slide if necessary
  function handleTransitionEnd() {
    if (currentIndex === clonedSlides.length - 1) {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex(1);
        setAnimate(true);
      }, 20); // delay ensures the DOM gets updated
    }
  }

  return (
    <div className="h-screen pt-10 flex flex-col bg-black justify-center items-center relative">
      <div className="z-10 overflow-hidden rounded [width:600px]">
        <motion.div
          className="flex"
          animate={{ x: -600 * currentIndex }}
          transition={animate ? { duration: 2, ease: "easeInOut" } : { duration: 0 }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedSlides.map((favourite, index) => (
            <div
              key={index}
              className="h-100 min-w-[600px] relative"
              onMouseEnter={handleMouseEnter}  // Start hover effect
              onMouseLeave={handleMouseLeave}  // End hover effect
            >
              {/* Hover effect on text */}
              <motion.div
                className="text-white absolute h-full w-full font-bold opacity-0 p-4 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,  // Fade in/out based on hover
                  y: isHovered ? 0 : 20, // Slide text into view
                }}
                transition={{ duration: 0.7 }}
              >
                <div>{favourite.title}</div>
                <p>{favourite.description}</p>
                <p>{favourite.location}</p>
              </motion.div>

              <img
                src={favourite.img}
                className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in"
                alt={favourite.title}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
