import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '6px',
      height: '100px',
      borderRadius: '9999px',
      backgroundColor: '#212121',
      marginRight: '2rem',
      zIndex: 800
    }}>
      <div style={{
        width: '100%',
        height: `${scrollProgress}%`,
        backgroundColor: 'rgb(149, 36, 255)',
              borderRadius: '8px',
        transition: 'height 0.1s ease-out',
      
      }} />
    </div>
  );
}