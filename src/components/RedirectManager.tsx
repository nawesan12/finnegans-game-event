"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";

const RedirectManager = () => {
  const router = useRouter();
  const { stations } = useGameStore();

  useEffect(() => {
    if (stations.length === 0) {
      router.push("/estaciones");
      return;
    }

    const firstIncompleteStation = stations.find((station) => !station.completed);

    if (firstIncompleteStation) {
      router.push(`/conquista/${firstIncompleteStation.id}`);
    } else {
      router.push("/final");
    }
  }, [stations, router]);

  return null; // This component doesn't render anything
};

export default RedirectManager;
