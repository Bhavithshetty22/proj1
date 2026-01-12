import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const taglineRef = useRef(null);
  const subtitleRef = useRef(null);
  const nameRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    // Dynamically load GSAP and ScrollTrigger
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    script2.async = true;

    document.body.appendChild(script1);
    
    script1.onload = () => {
      document.body.appendChild(script2);
      
      script2.onload = () => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        // Create smooth scroll animations
        const elements = [
          { ref: taglineRef, delay: 0 },
          { ref: subtitleRef, delay: 0.1 },
          { ref: nameRef, delay: 0.2 },
          { ref: para1Ref, delay: 0.3 },
          { ref: para2Ref, delay: 0.4 }
        ];

        elements.forEach(({ ref, delay }) => {
          if (ref.current) {
            gsap.fromTo(
              ref.current,
              {
                y: 80,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: ref.current,
                  start: 'top 85%',
                  end: 'top 50%',
                  toggleActions: 'play none none none'
                }
              }
            );
          }
        });
      };
    };

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #212121;
          color: #e0e0e0;
          overflow-x: hidden;
        }

        .hero-section {
          min-height: 100vh;
          padding: 80px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .tagline {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 300;
          line-height: 1.3;
          margin-bottom: 60px;
          max-width: 1200px;
          opacity: 0;
        }

        .subtitle {
          font-size: 1rem;
          margin-bottom: 80px;
          opacity: 0;
          color: rgba(224, 224, 224, 0.7);
        }

        .intro-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .name {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          opacity: 0;
        }

        .description {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .description p {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0;
          color: rgba(224, 224, 224, 0.85);
        }

        .hamburger {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          z-index: 1000;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background-color: #e0e0e0;
          transition: all 0.3s ease;
        }

        .hamburger:hover span {
          background-color: #fff;
        }

        .sidebar-indicator {
          position: fixed;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          writing-mode: vertical-rl;
          font-size: 0.85rem;
          opacity: 0.5;
          letter-spacing: 2px;
          color: #e0e0e0;
        }

        /* Add some extra sections for scroll demonstration */
        .spacer {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .intro-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-section {
            padding: 60px 20px;
          }

          .tagline {
            font-size: 1.8rem;
            margin-bottom: 40px;
          }

          .name {
            font-size: 2rem;
          }

          .description p {
            font-size: 1rem;
          }

          .sidebar-indicator {
            display: none;
          }
        }
      `}</style>

      

      <div className="hero-section" ref={sectionRef}>
        

        

        <h1 className="tagline" ref={taglineRef}>
          I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
        </h1>

        <p className="subtitle" ref={subtitleRef}>
          This is me.
        </p>

        <div className="intro-container">
          <h2 className="name" ref={nameRef}>
            Hi, I'm Bhavith.
          </h2>

          <div className="description">
            <p ref={para1Ref}>
              I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
            </p>
            <p ref={para2Ref}>
              My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            </p>
          </div>
        </div>
      </div>


    </>
  );
};

export default HeroSection;