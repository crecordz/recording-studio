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
        scrub: false,
        toggleActions: "play reverse play reverse",
      },
    })
    .fromTo(section, { translateY: "100px" }, { translateY: 0, duration: 2 });
};
