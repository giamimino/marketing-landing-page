'use client';

import React, { Children, useEffect, useRef, useState } from 'react';
import styles from './ui.module.scss';
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import { motion, AnimatePresence } from 'framer-motion';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

type TitleProps = {
  size: "text-[40px]" | "text-7xl";
};

type SectionProps = {
  direction: string,
  content: string,
  image: string,
}

type CardProps = {
  name: string[],
  image: string[],
  content: string[],
  about: string[],
}


export  function Title(props: TitleProps) {
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <h1
      ref={sectionRef}
      className={`${styles.h1} ${props.size} ${inView ? styles.visible : ''}`}
    >
      <span className={styles.typing}>
        <span className={styles.rotate}>AI</span> Marketing.
      </span>
      <span
        className={styles.typing}
        style={{ animationDelay: '1.3s' }}
      >
        Optimized Reach.
      </span>
    </h1>
  );
}



export const Button: React.FC<ButtonProps> = ({ children, ...props}) =>  (
    <button {...props} className={styles.button}>
      {children}
      <i className={"ri-arrow-right-line"}></i>
    </button>
)


export function Section(props: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className={`${styles.section} ${inView ? styles.inView : ''}`}
      style={{
        flexDirection: props.direction === "left" ? "row" : "row-reverse"
      }}
    >
      <aside>
        <Title size="text-[40px]" />
        <p dangerouslySetInnerHTML={{ __html: props.content }} />
        <Button>Learn more</Button>
      </aside>
      <div style={{
        perspective: 1000
      }}>
        <Image
          src={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/${props.image}.webp`}
          alt={props.image}
          width={531}
          height={531}
          objectFit="contain"
          className={`${styles.dropDown} ${props.direction === "left" ? styles.dropDownRight : styles.dropDownLeft}`}
        />
      </div>
    </main>
  );
}


export function CardSlider(props: CardProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % props.name.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + props.name.length) % props.name.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.cardSlider} style={{position: "relative"}}>
      <div className={styles.card}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.sliderContent}
          >
            <Image
              src={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/${props.image[index]}.webp`}
              alt={props.image[index]}
              width={256}
              height={256}
              style={{ objectFit: 'contain' }}
            />
            <aside>
              <p dangerouslySetInnerHTML={{ __html: props.content[index] }} />
              <h1>{props.name[index]}</h1>
              <p dangerouslySetInnerHTML={{ __html: props.about[index] }} />
              <h3><i className='ri-discord-fill'></i></h3>
            </aside>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <button onClick={prevSlide}><i className="ri-arrow-left-line"></i></button>
        <button onClick={nextSlide}><i className="ri-arrow-right-line"></i></button>
      </div>
    </section>
  );
}

export function Search() {
  const searchRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if(searchRef.current) {
      observer.observe(searchRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={`${styles.search}`} ref={searchRef}>
        <Image 
          src="https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/unknown2.webp" 
          alt="unknown" 
          width={500}
          height={500}
          className={inView ? styles.popUp : ""}
          objectFit='contain'/>
          <aside>
            <h1>
              <span className={inView ? styles.fadeRight : ""}>Get exponential reach</span>
              <span className={inView ? styles.fadeRight : ""}>via <span>AI Marketing</span></span>
            </h1>
            <div>
              <div>
                <input type="text" placeholder="Enter your work email" />
              </div>
              <Button>Get in touch</Button>
            </div>
          </aside>
      </section>
  )
}
