import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#04102d] text-white min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl">
        Comienza un <br />{" "}
        <span className="text-[#4bc3fe]">viaje a lo alto</span>
      </h1>
      <div>
        <Image
          src="/pasaporte.png"
          alt="Logo"
          width={400}
          height={400}
          className="max-h-[500px] object-contain"
        />
      </div>

      <p className="text-[#4bc3fe] text-4xl">¿venís?</p>

      <div className="flex items-center justify-center gap-4">
        <Link href="/estaciones">
          <Image
            src="/boton-obvio.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-20 object-contain"
          />
        </Link>
        <Link href="/estaciones">
          <Image
            src="/boton-supuesto.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-20 object-contain"
          />
        </Link>
      </div>
    </section>
  );
}
