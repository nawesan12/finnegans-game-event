import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      stations: [],
      completeStation: (id: string, answer: string) =>
        set((state: GameState) => ({
          stations: state.stations.map((s) =>
            s.id === id ? { ...s, completed: true, answer } : s,
          ),
        })),
      resetGame: () => set({ stations: [] }),
    }),
    { name: "finnegans-game-progress" },
  ),
);
