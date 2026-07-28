import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      updateUser: (data) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, ...data }
            : null,
        })),

      upgradeToPro: () =>
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                subscriptionTier: "pro",
              }
            : null,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);