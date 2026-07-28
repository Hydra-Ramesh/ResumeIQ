import { useEffect } from "react";
import { useAuthStore } from "./useAuthStore";

export function useGlobalAuthSync() {
  const { updateUser } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid token");
        }

        return res.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        if (data.user) {
          updateUser(data.user);
        }
      })
      .catch(() => {
        // Token may have expired.
      });
  }, [updateUser]);
}