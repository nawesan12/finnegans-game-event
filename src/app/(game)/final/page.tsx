import Image from "next/image";

export default function FinalPage() {
  return (
    <div className="min-h-screen w-full  bg-[url('/final-bg.png')] bg-cover bg-center mx-auto flex flex-col items-center justify-end gap-8 py-8">
      <p className="text-4xl font-semibold text-left whitespace-nowrap max-w-sm">
        Buscá tu silla <br /> y a tu equipo <br /> para el <i>hackaton.</i>
      </p>

      <Image
        src="/finnegans-blanco.png"
        alt="Finnegans logo"
        width={700}
        height={700}
        className="w-full max-w-sm object-contain px-12"
      />
    </div>
  );
}
