/* src/components/Effect/AnimateBottomToTop/AnimateBottomToTop.jsx */
import React, { useEffect, useRef } from "react";
import "./AnimateBottomToTop.css";

const AnimateBottomToTop = ({ children }) => {
  const observedElements = useRef([]);

  useEffect(() => {
    const handleElementVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "animated");
        } else {
          entry.target.classList.remove("visible", "animated");
        }
      });
    };

    const observer = new IntersectionObserver(handleElementVisibility, {
      rootMargin: "0px",
      threshold: 0.11, // Trigger animation when 10% of the element is in view
    });

    const elements = document.querySelectorAll(".animate-bottom-to-top");
    elements.forEach((element) => {
      observer.observe(element);
      observedElements.current.push(element);
    });

    return () => {
      observedElements.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return <div>{children}</div>;
};

export default AnimateBottomToTop;
