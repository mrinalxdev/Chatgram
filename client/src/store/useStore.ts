import { selectedUserState, useState } from "@/types";
import { create } from "zustand";

export const useUser = create<useState>((set) => ({
  myUser: undefined,
  setUser: (user) => set({ myUser: user }),
}));

export const useAllUsers = create((set) => ({
  users: undefined,
  setUsers: (users: any) => set({ users: users }),
}));

export const useSelectedUser = create<selectedUserState>((set) => ({
  selectedUser: undefined,
  setSelectedUser: (user) => set({ selectedUser: user }),
}));

export const useMessages = create((set) => ({
  message : undefined,
  setMessages : (messages : any) => set({messages})
}));
