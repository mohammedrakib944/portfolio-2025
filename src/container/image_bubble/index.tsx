import { JSX, useRef, useState } from "react";
import BubbleImage from "./BubbleImage";

const imageSources = ["/img/bird.jpg", "/img/jungle.jpg", "/img/tiger.jpg"];

const BubbleEffectSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageIndexRef = useRef(0);
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const triggerBubble = (x: number, y: number) => {
    const nextImage = imageSources[imageIndexRef.current % imageSources.length];
    imageIndexRef.current += 1;

    const bubble = (
      <BubbleImage key={Date.now()} image={nextImage} x={x} y={y} />
    );

    setBubbles((prev) => [...prev, bubble]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lastMousePosition.current = { x, y };

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    pauseTimeoutRef.current = setTimeout(() => {
      triggerBubble(lastMousePosition.current.x, lastMousePosition.current.y);
    }, 300); // Trigger bubble 300ms after no mouse move
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#f0f0f0",
        overflow: "hidden",
      }}
    >
      {bubbles}
      <h2 style={{ textAlign: "center", paddingTop: "150px" }}>
        Hover me for bubbles 🎈
      </h2>
    </div>
  );
};

export default BubbleEffectSection;
