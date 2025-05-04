import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useProject = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
        },
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useProject;
