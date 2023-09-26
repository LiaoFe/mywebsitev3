import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button, Fade } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
      console.log("TRUE");
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && <motion.div
        key={"my_unique_key"}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button className="fixed right-0 bottom-0 m-4" style={{background: "#363B49", borderRadius: "25%"}} onClick={scrollToTop}>
          <FaArrowUp className="m-2" style={{background: "#363B49"}}/>
        </button>
      </motion.div>}
      </>
  );
}
