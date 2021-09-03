gsap.from(".hero__image", {
  duration: 2.5,
  ease: "slow( 0.7, 0.7, false)",
  x: -500,
});

gsap.from(".hero__circle.green", {
  duration: 2.5,
  ease: "slow( 0.7, 0.7, false)",
  y: 500,
});
gsap.from(".hero__circle.lightred", {
    duration: 1, duration:1, opacity: 0 , delay:1 
    
  });

gsap.from(".hero__circle.red", {
    duration: 2.5,
    ease: "slow( 0.7, 0.7, false)",
    y: 500,
  });
gsap.from(".hero__circle.blue", {
    duration: 2.5,
    ease: "slow( 0.7, 0.7, false)",
    y: 500,
  });