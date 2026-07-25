import { useEffect, useState } from "react";

const FALLBACK_TESTIMONIALS = [
  {
    _id: "fallback-1",
    name: "Ava Chen",
    role: "Product Designer",
    rating: 5,
    message:
      "ResumeIQ helped me turn a plain project list into a resume that actually sounded like impact.",
  },
  {
    _id: "fallback-2",
    name: "Marcus Reed",
    role: "Software Engineer",
    rating: 5,
    message:
      "The ATS guidance was the difference between guessing and knowing what to fix before applying.",
  },
  {
    _id: "fallback-3",
    name: "Nina Patel",
    role: "Operations Analyst",
    rating: 5,
    message:
      "I got stronger bullets in minutes and could reuse them across applications without rewriting everything.",
  },
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const apiUrl = import.meta.env.VITE_API_URL;

    async function loadTestimonials() {
      try {
        if (!apiUrl) {
          setTestimonials(FALLBACK_TESTIMONIALS);
          return;
        }

        const response = await fetch(
          `${apiUrl}/public/testimonials`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`Testimonials request failed: ${response.status}`);
        }

        const contentType = response.headers.get("content-type") ?? "";

        if (!contentType.includes("application/json")) {
          throw new Error("Testimonials response was not JSON");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setTestimonials(data);
        } else {
          setTestimonials(FALLBACK_TESTIMONIALS);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load testimonials:", error);
          setTestimonials(FALLBACK_TESTIMONIALS);
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
