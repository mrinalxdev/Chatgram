import { useState } from "@/types";
import { create } from "zustand";

export const useUser = create<useState>((set) => ({
  myUser: undefined,
  setUser: (user) => set({ myUser: user }),
}));
