import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { User, Mail, Github, Linkedin } from 'lucide-react';

const ProfileCard = () => {
  const [flipped, setFlipped] = useState(false);

  // Mouse tilt for 3D feel
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <section id="profile" className="relative z-10 bg-gradient-to-b from-pink-700 to-purple-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">The Tarot of Talent</h2>
          <p className="mt-2 text-white/80">A glassy tarot-style card that flips to reveal the story.</p>
        </div>

        <div className="grid place-items-center">
          <motion.div
            className="relative h-[420px] w-[300px] cursor-pointer [perspective:1200px]"
            onClick={() => setFlipped((f) => !f)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative h-full w-full rounded-2xl border border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-xl"
            >
              <motion.div
                className="relative h-full w-full rounded-xl"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0.1, 0.2, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-pink-500/20 to-amber-400/20 p-6"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex h-full flex-col items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 blur" />
                        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-white/10 backdrop-blur">
                          <User className="h-12 w-12" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold">Nama Kamu</h3>
                      <p className="text-white/80">Creative Developer • Visual Storyteller</p>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-3">
                      <a href="#projects" className="rounded-lg bg-white/10 py-3 text-center font-semibold hover:bg-white/20">Projects</a>
                      <a href="#skills" className="rounded-lg bg-white/10 py-3 text-center font-semibold hover:bg-white/20">Skills</a>
                      <a href="#contact" className="rounded-lg bg-white/10 py-3 text-center font-semibold hover:bg-white/20">Contact</a>
                    </div>

                    <div className="text-xs text-white/70">Click to flip the card</div>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/40 via-fuchsia-600/30 to-pink-600/30 p-6"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold">About Me</h3>
                      <p className="mt-2 text-white/80">
                        I craft immersive, animated experiences on the web. Blending circus flair with modern tech to
                        make brands unforgettable.
                      </p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5" /> your@email.com
                      </li>
                      <li className="flex items-center gap-3">
                        <Github className="h-5 w-5" /> github.com/yourhandle
                      </li>
                      <li className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5" /> linkedin.com/in/yourhandle
                      </li>
                    </ul>

                    <div className="text-xs text-white/70">Click to flip back</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
