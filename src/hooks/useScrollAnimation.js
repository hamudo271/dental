import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 })
  );

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.current.observe(el));
    return () => observer.current.disconnect();
  }, []);
};

export default useScrollAnimation;
