import Image from "next/image";
import Link from "next/link";

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
    <section className="min-h-screen bg-black grid grid-cols-2 grid-rows-4 p-1">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          width={400}
          height={400}
          className="object-contain"
        />
      ))}
      <div className="p-4 pt-2 pb-2 flex flex-col justify-around relative">
        <p className="font-semibold leading-none text-2xl">
          Completaste <br /> la misión, <br />{" "}
          <span className="text-[#4bc3fe] italic">
            llegaste <br /> a lo alto.
          </span>
        </p>

        <Image
          className="inline size-14 object-contain absolute right-3 bottom-[70px]"
          width={64}
          height={64}
          src="/nube.png"
          alt="Imagen de liderazgo"
        />

        <Link
          href="/final"
          className="font-semibold gap-6 text-center mx-auto min-w-full py-1 px-1 max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg"
        >
          Seguir subiendo
        </Link>
      </div>
    </section>
  );
}
