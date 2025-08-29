import Image from "next/image";
import { stations } from "../data/station";

export default function ProgressTracker({
  completedCount,
}: {
  completedCount: number;
}) {
  return (
    <div className="flex items-center font-semibold gap-6 px-6 pr-7 py-1 text-lg max-w-max text-white rounded-full border-cyan-400 border-2 bg-cyan-400/20 backdrop-blur-lg col-span-2">
      <span className="flex items-center gap-2">
        <Image src="/finnegans.png" alt="Conquistas" width={17} height={17} />
        Conquistas
      </span>
      <span>
        {completedCount}/{stations.length}
      </span>
    </div>
  );
}
