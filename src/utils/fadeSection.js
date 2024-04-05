import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const fadeSection = (section) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
        toggleActions: "play reverse play reverse",
      },
    })
    .fromTo(section, { scale: 0.4 }, { scale: 1, duration: 1 });
};
