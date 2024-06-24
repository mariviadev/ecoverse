"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const WorldCard = ({ imgUrl, title, people, positioning }) => (
  <motion.div
    variants={fadeIn("up", "tween", 0.1, 1)}
    className={`absolute ${positioning} p-[6px] lg:p-[8px] rounded-full bg-[#39364C] flex justify-center items-center text-shadow`}
  >
    <div className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] rounded-[50%] mr-3">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    <div className="flex flex-col">
      <p className="font-normal sm:text-[11px] lg:text-[15px] text-white">
        {people}+ exploring
      </p>
      <h3 className="font-bold sm:text-[13px] lg:text-[20px] text-white mr-3 lg:mr-5">
        {title}
      </h3>
    </div>
  </motion.div>
);

export default WorldCard;
