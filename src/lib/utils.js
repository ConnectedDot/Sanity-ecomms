import confetti from 'canvas-confetti';

export const runSchoolPride = () => {
  var count = 200;
  var defaults = {
    origin: { y: 0.4 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.75, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 100,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 320,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};
