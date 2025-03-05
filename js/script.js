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

  // img-box
  gsap.utils.toArray('.img-box').forEach(function (imgBox) {
    // toArray() => 요소를 배열로 만드는 메소드
    // forEach() => 배열을 반복문으로 사용하는 메소드
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: '50% 100%',
        toggleClass: { targets: imgBox, className: 'active' },
        scrub: 1,
        markers: true,
      },
    });
  });
});
