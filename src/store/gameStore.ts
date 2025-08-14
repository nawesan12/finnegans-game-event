import { create } from "zustand";
import { persist } from "zustand/middleware";

type StationProgress = {
  id: string;
  completed: boolean;
  answers?: string[];
};

type GameState = {
  stations: StationProgress[];
  completeStation: (id: string, answers: string[]) => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      stations: [],
      completeStation: (id: string, answers: string[]) =>
        set((state: GameState) => ({
          stations: state.stations.map((s) =>
            s.id === id ? { ...s, completed: true, answers } : s,
          ),
        })),
      resetGame: () => set({ stations: [] }),
    }),
    { name: "game-progress" },
  ),
);
