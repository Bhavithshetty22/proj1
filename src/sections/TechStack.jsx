'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MY_STACK = {
    FRONTEND: [
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
            name: 'GSAP',
            icon: 'https://cdn.cdnlogo.com/logos/g/59/gsap-greensock.svg',
        },
        {
            name: 'Framer Motion',
            icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        },
    ],

    BACKEND: [
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
            name: 'Express.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
    ],

    DATABASE: [
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
            name: 'Prisma',
            icon: 'https://cdn.worldvectorlogo.com/logos/prisma-3.svg',
        },
    ],

    TOOLS: [
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
    ],
};

const Skills = () => {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const slideUpEls = containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEls || slideUpEls.length === 0) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from(slideUpEls, {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef }
    );

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom top',
                    end: 'bottom -50%',
                    scrub: 1,
                },
            }).to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="my-stack" ref={containerRef} className="skills-section">
            <div className="skills-container">
                {/* Header */}
                <div className="skills-header">
                    <span className="skills-icon">✱</span>
                    <h2 className="skills-title">MY STACK</h2>
                </div>

                <div className="skills-content">
                    {Object.entries(MY_STACK).map(([category, items]) => (
                        <div className="skills-category-wrapper" key={category}>
                            {/* Category */}
                            <div className="skills-category-name">
                                <p className="slide-up category-text">
                                    {category}
                                </p>
                            </div>

                            {/* Stack Items */}
                            <div className="skills-items-grid">
                                {items.map((item) => (
                                    <div key={item.name} className="slide-up skill-item">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="skill-icon"
                                            loading="lazy"
                                        />
                                        <span className="skill-name">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;