import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";
import { mobile_width } from "@/config/responsive";
const useExprience = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      if (window.innerWidth < mobile_width) return;

      gsap.from(".experience", {
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

export default useExprience;
