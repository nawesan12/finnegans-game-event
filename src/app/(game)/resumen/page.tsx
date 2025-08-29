"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumenPage() {
  const images = [
    "/cuadro-calidad.png",
    "/cuadro-colaboracion.png",
    "/cuadro-compromiso.png",
    "/cuadro-creatividad.png",
    "/cuadro-empatia.png",
    "/cuadro-liderazgo.png",
    "/cuadro-proposito.png",
  ];

  return (
    <section className="h-svh max-h-svh bg-black p-12">
      <div className="grid grid-cols-2 grid-rows-auto gap-0 h-full">
        {/* Imágenes con fade-in secuencial */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        ))}

        {/* Texto + botón */}
        <motion.div
          className="p-2 flex flex-col justify-around relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: images.length * 0.15, duration: 0.5 }}
        >
          <p className="font-semibold leading-none text-white text-xl">
            Completaste <br /> la misión, <br />{" "}
            <span className="text-[#4bc3fe] italic">
              llegaste <br /> a lo alto.
            </span>
          </p>

          {/* Nube flotante */}
          <motion.div
            className="inline size-14 object-contain absolute -right-1 bottom-8"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Image
              width={38}
              height={38}
              src="/nube.png"
              alt="Imagen de liderazgo"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: images.length * 0.15 + 0.3, duration: 0.5 }}
            className="flex min-w-full"
          >
            <Link
              href="/final"
              className="font-semibold gap-6 text-center text-sm mx-auto min-w-full py-1 px-1 max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg"
            >
              Seguir subiendo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
