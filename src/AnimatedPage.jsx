import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        opacity: { duration: 0.5 },
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
