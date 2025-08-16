import { create } from "zustand";
import { persist } from "zustand/middleware";
import { stations as stationsData } from "@/data/station";

type StationProgress = {
  id: string;
  completed: boolean;
  answer: string;
};

type GameState = {
  stations: StationProgress[];
  completeStation: (id: string, answer: string) => void;
  resetGame: () => void;
};

const initialStations: StationProgress[] = stationsData.map((station) => ({
  id: station.id,
  completed: false,
  answer: "",
}));

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      stations: initialStations,
      completeStation: (id: string, answer: string) =>
        set((state: GameState) => ({
          stations: state.stations.map((s) =>
            s.id === id ? { ...s, completed: true, answer } : s,
          ),
        })),
      resetGame: () => set({ stations: initialStations }),
    }),
    { name: "finnegans-game-progress" },
  ),
);
