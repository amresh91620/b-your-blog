import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="py-6 bg-black text-white overflow-hidden whitespace-nowrap flex border-y border-black">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="text-[10px] font-bold tracking-[1em] uppercase flex gap-20"
      >
        <span>
          Insight • Creativity • Innovation • Travel • Lifestyle • Finance • Technology • Wellness •
        </span>
        <span>
          Insight • Creativity • Innovation • Travel • Lifestyle • Finance • Technology • Wellness •
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
