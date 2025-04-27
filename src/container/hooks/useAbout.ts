import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useAbout = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.from(".about-image", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useAbout;
