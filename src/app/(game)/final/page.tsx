"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalPage() {
  return (
    <div className="min-h-screen w-full bg-[url('/final-bg.png')] bg-cover bg-center mx-auto flex flex-col items-center justify-end gap-8 py-8">
      {/* Texto */}
      <motion.p
        className="text-4xl font-semibold text-left whitespace-nowrap max-w-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Buscá tu silla <br /> y a tu equipo <br /> para el <i>hackaton.</i>
      </motion.p>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
      >
        <Image
          src="/finnegans-blanco.png"
          alt="Finnegans logo"
          width={700}
          height={700}
          className="w-full max-w-sm object-contain px-12"
        />
      </motion.div>
    </div>
  );
}
