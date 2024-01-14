import { create } from "zustand";
import { persist } from "zustand/middleware";
import { counterSlice } from "./storeSlice/counterSlice";

// WE can have two stores (if necessary) one to have persistent and non persistent data
export const useStore = create((...prev) => ({
  ...counterSlice(...prev),
}));

//PageContextAPI or anything related to auth can be stored here IMO 
export const usePersistentStore = create(
  persist(
    (...prev) => ({
      ...counterSlice(...prev),
    }),
    {
      name: "persist-storage",
    }
  )
);
