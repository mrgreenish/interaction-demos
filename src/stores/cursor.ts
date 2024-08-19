import { create } from "zustand";

export type CursorTypes = "default" | "shrink" | "pill" | "dot" | "line";
export type CursorMotionTypes = "default" | "snap";

export type CursorState = {
  currentCursor: CursorTypes;
  setCursor: (cursor: CursorTypes) => void;
};

export type CursorMotionState = {
  currentCursorMotion: CursorMotionTypes;
  setCursorMotion: (cursorMotion: CursorMotionTypes) => void;
};

// Zustand stores
export const useCursorStore = create<CursorState>((set) => ({
  currentCursor: "default",
  setCursor: (cursor) => set(() => ({ currentCursor: cursor })),
}));

export const useCursorMotionStore = create<CursorMotionState>((set) => ({
  currentCursorMotion: "default",
  setCursorMotion: (cursorMotion) =>
    set(() => ({ currentCursorMotion: cursorMotion })),
}));
