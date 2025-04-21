import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useAbout = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.from(".about-image", {
        transform: "scale(2) translateX(31%) translateY(10%)",
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          scrub: 2,
        },
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useAbout;
