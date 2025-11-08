import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Stars } from 'lucide-react';

const acts = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Grand Illusion: Brand Sites',
    desc: 'High-impact, animated landing experiences that mesmerize audiences.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Acrobatics: Frontend Engineering',
    desc: 'Robust, responsive UIs with delightful micro-interactions.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Face Painting: Visual Identity',
    desc: 'Art direction and design systems that feel playful yet premium.',
  },
  {
    icon: <Stars className="h-6 w-6" />,
    title: 'Starlight: Motion Design',
    desc: 'Framer Motion choreographies that tell your story with flair.',
  },
];

const ActsShowcase = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-purple-900 to-fuchsia-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Center Ring Acts</h2>
          <p className="mt-2 text-white/80">Highlights of performances and specialties.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {acts.map((act, i) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-lg"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-white/10">
                {act.icon}
              </div>
              <h3 className="text-xl font-bold">{act.title}</h3>
              <p className="mt-2 text-white/80">{act.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActsShowcase;
