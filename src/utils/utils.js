import gsap from "gsap";

export function animateElement(
  trigger,
  ref,
  start,
  end,
  x,
  y,
  delay,
  ease,
  duration
) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start,
        end,
        // markers: true,
      },
    })
    .fromTo(
      ref.current,
      { x: x, y: y, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: duration,
        ease: ease,
        delay: delay,
      }
    );
}
