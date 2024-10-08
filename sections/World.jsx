"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import WorldCard from "../components/WorldCard";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Now Available in 89 Countries"
        textStyles="text-center"
      />
      <TitleText
        title={<>Make new friends as you explore the world together</>}
        textStyles="text-center"
      />

      <motion.div className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="person" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="person" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="person" className="w-full h-full" />
        </div>

        <WorldCard
          imgUrl="/amazon.jpg"
          title="Amazon Jungle"
          people="264"
          positioning="top-[60%] left-[10%]"
        />

        <WorldCard
          imgUrl="/arctic.jpg"
          title="Arctic Awakenings"
          people="103"
          positioning="top-[0%] left-[30%]"
        />

        <WorldCard
          imgUrl="/cities.jpg"
          title="Urban Greenways"
          people="167"
          positioning="top-[30%] left-[60%]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
