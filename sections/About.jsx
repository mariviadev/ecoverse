"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Ecoverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The <span className={styles.aboutBold}>Ecoverse</span> is an exciting
        educational VR platform that lets you explore diverse ecosystems in{" "}
        <span className={styles.aboutBold}>immersive mini-worlds</span>. Journey
        through lush rainforests, dive into vibrant coral reefs, brave the icy
        mountains, trek across the hot deserts, or discover the hidden nature in
        cities. Each world offers{" "}
        <span className={styles.aboutBold}>
          interactive and engaging lessons
        </span>{" "}
        about the environment, conservation, and the natural world. The Ecoverse
        makes learning fun and unforgettable, perfect for{" "}
        <span className={styles.aboutBold}>
          students, educators, and nature enthusiasts
        </span>{" "}
        alike. Dive into the <span className={styles.aboutBold}>Ecoverse</span>{" "}
        and transform the way you{" "}
        <span className={styles.aboutBold}>learn about our planet!</span>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
