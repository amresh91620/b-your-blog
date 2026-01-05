import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeItems = [
    "Insight", "Creativity", "Innovation", "Travel", 
    "Lifestyle", "Finance", "Technology", "Wellness", "Design"
  ];

  return (
    <div className="relative py-10 bg-[#000000] overflow-hidden border-y border-[#1a1a1a]/5">
      
      {/* 01. Side Fading Gradient (Masking) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10" />

      {/* 02. Moving Content */}
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        whileHover={{ transition: { duration: 60 } }} // Slows down on hover
        className="flex whitespace-nowrap items-center gap-12"
      >
        {/* Repeating the list 3 times for a seamless loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="text-[11px] font-black tracking-[0.5em] uppercase text-[#ffffff] hover:text-[#ffffff] transition-colors cursor-default">
                  {item}
                </span>
                {/* Premium Separator: Italic 'and' or a Gold Dot */}
                <span className="font-serif italic text-lg text-[#ffffff] font-light">
                  &
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;