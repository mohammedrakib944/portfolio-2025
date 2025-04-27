import { RefObject } from "react";
import { useGSAP, gsap } from "./animation";

const useProject = ({ container }: { container: RefObject<null> }) => {
  useGSAP(
    () => {
      const is_desktop = window.innerWidth >= 768;

      if (!is_desktop) return;

      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card: any) => {
        gsap.to(card, {
          scale: 0.3,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 0%",
            end: "bottom 0%",
            scrub: 1,
            snap: {
              snapTo: 1.09,
              duration: 0.3,
              ease: "power1.in",
              delay: 0, // snap immediately after scrolling stops
            },
            pin: true,
          },
        });
      });
    },
    { scope: container, dependencies: [] }
  );
};

export default useProject;
