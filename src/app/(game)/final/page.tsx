"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalPage() {
  return (
    <div className="relative min-h-screen h-screen w-full flex flex-col justify-between items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full px-8 py-12">
        {/* Centered Text */}
        <div className="flex flex-col gap-11 max-w-md mx-auto my-auto relative bottom-12">
          {/* Animated H2 */}
          <motion.h2
            className="text-6xl text-black font-semibold leading-7"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block"
            >
              ¡Misión
            </motion.span>{" "}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="inline-block align-middle relative bottom-2 right-2"
            >
              <Image
                src="/taza.svg"
                alt="Checkmark"
                width={100}
                height={100}
                className="inline-block"
              />
            </motion.span>
            <br />
            <motion.span
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="inline-block"
            >
              cumplida!
            </motion.span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-2xl font-semibold text-left text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Es momento de relajarte, <br /> charlar y disfrutar algo rico.
          </motion.p>
        </div>

        {/* Bottom Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 1.8,
          }}
        >
          <Image
            src="/finnegans-blanco.png"
            alt="Finnegans logo"
            width={700}
            height={700}
            className="w-5/6 max-w-sm px-6 object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
