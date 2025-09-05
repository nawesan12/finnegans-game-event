"use client";

import React from "react";
import { stations } from "@/data/station";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import ProgressTracker from "@/components/ProgressTracker";
import { useGameStore } from "@/store/gameStore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Variants para animaciones de la lista
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const App = () => {
  const { stations: stationsProgress } = useGameStore();
  const router = useRouter();

  const allCompleted =
    stationsProgress.filter((e) => e.completed).length === stations.length;

  const handleContinue = () => {
    router.push("/resumen");
  };

  return (
    <motion.div
      className="bg-[#04102d] text-white h-svh max-h-svh flex flex-col items-center justify-center py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full lg:max-w-sm mx-auto flex flex-col">
        {/* Header */}
        <header className="p-6 py-1 pt-4 text-center flex items-center justify-between">
          <Link href="/" className="rounded-full border border-[#4bc3fe] p-2">
            <ArrowLeft />
          </Link>
          <motion.h1
            className="text-2xl font-medium tracking-wider whitespace-nowrap text-[#4bc3fe]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Estaciones
          </motion.h1>
        </header>

        {/* Stations List */}
        <main className="flex-grow p-4 pb-0">
          <ul className="flex flex-col gap-2">
            {stations.map((station, i) => {
              const progress = stationsProgress.find(
                (s) => s.id === station.id,
              );
              const isCompleted = !!progress?.completed;
              return (
                <motion.a
                  key={station.id}
                  href={isCompleted ? "#" : `/conquista/${station.id}`}
                  className="p-[2px] py-px rounded-full block"
                  style={{
                    background: isCompleted
                      ? `linear-gradient(to right, ${station.color} 0%, transparent 100%)`
                      : station.color,
                  }}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <li
                    className={`flex items-center justify-between pr-1 py-2 rounded-full  transition-all duration-300`}
                    style={{
                      background: isCompleted ? `#04102dbb` : "#04102d",
                    }}
                  >
                    <div
                      className={`flex flex-row w-full items-center space-x-4 ${
                        !isCompleted ? "w-full justify-between px-6" : ""
                      }`}
                    >
                      {!isCompleted && (
                        <div className={` py-[1px] rounded-full`}>
                          <Image
                            src={station.icon}
                            alt={station.name}
                            width={200}
                            height={200}
                            className="object-contain size-9"
                          />
                        </div>
                      )}

                      <span
                        className={`font-semibold text-2xl pl-6 py-2 relative z-30`}
                        style={{ color: station.color }}
                      >
                        {station.name}
                      </span>
                    </div>
                    <AnimatePresence>
                      {isCompleted && (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          className="size-11 flex-shrink-0 rounded-full flex items-center justify-center bg-[#4bc3fe]"
                        >
                          <Check />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </motion.a>
              );
            })}
          </ul>
        </main>

        {/* Footer */}
        <footer className="py-6 pt-4 mx-auto grid grid-cols-3 gap-2 px-4 md:max-w-sm">
          <ProgressTracker
            completedCount={stationsProgress.filter((e) => e.completed).length}
          />
          <motion.button
            onClick={allCompleted ? handleContinue : undefined}
            className={`py-1 text-md col-span-1 px-4 font-semibold rounded-full max-w-max w-full transition-all duration-300 ${
              allCompleted
                ? "bg-transparent border-cyan-400 border-2"
                : "bg-transparent border-cyan-400 border-2 text-gray-200" //preguntarle a tats sobre este color
            }`}
            disabled={!allCompleted}
            animate={
              allCompleted
                ? { scale: [1, 1.1, 1], boxShadow: "0 0 20px #22c55e55" }
                : { scale: 1 }
            }
            transition={{ repeat: allCompleted ? Infinity : 0, duration: 1.5 }}
          >
            Continuar
          </motion.button>
        </footer>
      </div>
    </motion.div>
  );
};

export default App;
