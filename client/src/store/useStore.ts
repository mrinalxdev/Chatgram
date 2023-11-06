import { useState, userProps } from "@/types";
import { create } from "zustand";


export const useUser = create<useState>((set) => ({
  myUser: undefined,
  setUser: (user) => set({ myUser: user }),
}));

export const useAllUsers = create((set) => ({
  users: undefined,
  setUsers: (users: any) => set({ users: users }),
}));
