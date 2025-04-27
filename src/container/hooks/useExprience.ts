import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";
import useView from "@/hooks/useView";

const useExprience = ({ container }: { container: RefObject<null> }) => {
  const { is_desktop } = useView();

  useGSAP(
    () => {
      if (!is_desktop) return;

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
