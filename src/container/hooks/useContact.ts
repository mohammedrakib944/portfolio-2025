import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useContact = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      gsap.from(".input-item", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useContact;
