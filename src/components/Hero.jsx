import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-purple-900 via-fuchsia-800 to-pink-700 text-white">
      {/* 3D Spline scene as interactive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradients to add circus aura; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute top-24 right-10 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <motion.span
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: [0, -10, 0, 10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur"
            >
              🎪 Welcome to the Circus of Creativity
            </motion.span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Personal Branding Portfolio
            </span>
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Step right up! A vibrant showcase of skills and stories — where design meets magic and code steals the show.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#profile"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-purple-900 font-semibold shadow-xl shadow-fuchsia-500/20 hover:bg-white"
            >
              Meet the Performer
              <span className="transition-transform group-hover:translate-x-1">✨</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/20"
            >
              Explore Acts
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee lights */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto mb-6 flex max-w-3xl justify-center gap-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_2px_rgba(251,191,36,0.7)]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, delay: i * 0.08, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
