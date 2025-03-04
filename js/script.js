$(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.visual',
        pin: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        maker: true,
      },
    })
    .to('.visual h1', { opacity: 1, duration: 10, ease: 'none' }, 5)
    .to(
      '.visual img',
      { scale: 0.4, opacity: 0.3, duration: 10, ease: 'none' },
      5
    );
});
