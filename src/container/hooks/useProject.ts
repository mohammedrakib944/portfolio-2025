import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useProject = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.to(".project-section", {
        left: "-200%",
        scrollTrigger: {
          trigger: container.current,
          start: "top 15%",
          end: "top -100%",
          pin: true,
          scrub: 2,
        },
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useProject;
