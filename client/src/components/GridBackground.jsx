export function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  );
}