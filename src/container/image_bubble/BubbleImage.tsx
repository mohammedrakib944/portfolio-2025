import { useEffect, useRef } from "react";
import gsap from "gsap";

type BubbleImageProps = {
  image: string;
  x: number;
  y: number;
};

const BubbleImage: React.FC<BubbleImageProps> = ({ image, x, y }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el) {
      gsap.fromTo(
        el,
        {
          x,
          y,
          scale: 0.3,
          opacity: 1,
        },
        {
          x: x + (Math.random() - 0.5) * 100,
          y: y - 100,
          scale: 1,
          //   opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => el.remove(),
        }
      );
    }
  }, [x, y]);

  return (
    <img
      ref={imgRef}
      src={image}
      style={{
        position: "absolute",
        width: 200,
        height: 200,
        pointerEvents: "none",
        // transform: "translateY(-50%)",
      }}
      alt="Image"
    />
  );
};

export default BubbleImage;
