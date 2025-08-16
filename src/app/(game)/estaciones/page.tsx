"use client";

import React from "react";
import { stations } from "@/data/station";
import Image from "next/image";
import { Check } from "lucide-react";
import ProgressTracker from "@/components/ProgressTracker";
import { useGameStore } from "@/store/gameStore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    const nextStation = stations.find((station) => {
      const progress = stationsProgress.find((s) => s.id === station.id);
      return !progress?.completed;
    });

    if (nextStation) {
      router.push(`/conquista/${nextStation.id}`);
    } else {
      router.push("/resumen");
    }
  };

  return (
    <motion.div
      className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full lg:max-w-sm mx-auto flex flex-col ">
        {/* Header */}
        <header className="p-6 text-center">
          <motion.h1
            className="text-2xl font-medium tracking-wider whitespace-nowrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Estaciones a &nbsp;
            <div className="inline-flex relative -left-2 max-w-max">
              <span>descubrir</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="origin-left absolute -bottom-2 w-full h-[6px] bg-[url('/subrayado.png')] bg-no-repeat bg-contain"
              />
            </div>
          </motion.h1>
        </header>

        {/* Stations List */}
        <main className="flex-grow p-4">
          <ul className="flex flex-col gap-4">
            {stations.map((station, i) => {
              const progress = stationsProgress.find(
                (s) => s.id === station.id,
              );
              const isCompleted = !!progress?.completed;
              return (
                <motion.a
                  key={station.id}
                  href={isCompleted ? "#" : `/conquista/${station.id}`}
                  className="p-[2px] rounded-full block"
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
                    className={`flex items-center justify-between pr-4 py-2 rounded-full  transition-all duration-300`}
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
                        <div className={` py-1 rounded-full`}>
                          <Image
                            src={station.icon}
                            alt={station.name}
                            width={200}
                            height={200}
                            className="object-contain size-10"
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
        <footer className="py-6 flex items-center justify-center gap-2 px-4">
          <ProgressTracker completedCount={stationsProgress.length} />
          <motion.button
            onClick={handleContinue}
            className={`py-1 text-lg px-6 font-semibold rounded-full max-w-max w-full transition-all duration-300 ${
              allCompleted
                ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg shadow-green-500/30"
                : "bg-transparent border-cyan-400 border-2"
            }`}
            animate={
              allCompleted
                ? { scale: [1, 1.1, 1], boxShadow: "0 0 20px #22c55e55" }
                : { scale: 1 }
            }
            transition={{ repeat: allCompleted ? Infinity : 0, duration: 1.5 }}
          >
            {allCompleted ? "¡Completado!" : "Continuar"}
          </motion.button>
        </footer>
      </div>
    </motion.div>
  );
};

export default App;
