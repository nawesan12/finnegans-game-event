"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      {/* Título */}
      <motion.h1
        className="text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Comienza un <br />
        <span className="text-[#4bc3fe]">viaje a lo alto</span>
      </motion.h1>

      {/* Imagen del pasaporte */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="/pasaporte.png"
          alt="Logo"
          width={400}
          height={400}
          className="max-h-[500px] object-contain"
        />
      </motion.div>

      {/* Texto */}
      <motion.p
        className="text-[#4bc3fe] text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        ¿venís?
      </motion.p>

      {/* Botones */}
      <motion.div
        className="flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/estaciones">
            <Image
              src="/boton-obvio.png"
              alt="Logo"
              width={200}
              height={200}
              className="h-20 object-contain"
            />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/estaciones">
            <Image
              src="/boton-supuesto.png"
              alt="Logo"
              width={200}
              height={200}
              className="h-20 object-contain"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
