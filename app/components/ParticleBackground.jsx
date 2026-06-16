"use client";

import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: "#050816",
        },

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: ["#00ffff", "#7c3aed"],
          },

          links: {
            enable: true,
            color: "#00ffff",
            opacity: 0.15,
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  );
}
