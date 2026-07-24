import { useEffect, useState } from "react";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTestimonials() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/public/testimonials`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`Testimonials request failed: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load testimonials:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    testimonials,
    loading,
  };
}
