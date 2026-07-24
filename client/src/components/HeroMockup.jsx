import { FloatingWidgets } from "./FloatingWidgets";
import { EditorPreview } from "./EditorPreview";

export function HeroMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto relative perspective-[2000px] mt-auto">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-40 pointer-events-none" />

      <FloatingWidgets />

      <EditorPreview />
    </div>
  );
}
