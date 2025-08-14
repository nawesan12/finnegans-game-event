import { create } from "zustand";
import { persist } from "zustand/middleware";

type StationProgress = {
  id: string;
  completed: boolean;
  answers?: string[];
};

type GameState = {
  stations: StationProgress[];
  initializeStations: (stations: { id: string }[]) => void;
  completeStation: (id: string, answers: string[]) => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      stations: [],
      initializeStations: (stations: { id: string }[]) =>
        set((state) => {
          if (state.stations.length === 0) {
            return {
              stations: stations.map((s) => ({
                id: s.id,
                completed: false,
                answers: [],
              })),
            };
          }
          return {};
        }),
      completeStation: (id: string, answers: string[]) =>
        set((state: GameState) => ({
          stations: state.stations.map((s) =>
            s.id === id ? { ...s, completed: true, answers } : s,
          ),
        })),
      resetGame: () => set({ stations: [] }),
    }),
    { name: "finnegans-game-progress" },
  ),
);
