import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-fuchsia-900 to-purple-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Book a Show</h2>
          <p className="mt-2 text-white/80">Let’s create something spectacular together.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg"
          >
            <div className="grid gap-4">
              <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder="Your Name" />
              <input type="email" className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder="Email" />
              <textarea rows={5} className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder="Message" />
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/90 px-5 py-3 font-semibold text-purple-900 hover:bg-white">
                <Send className="h-5 w-5" /> Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-lg"
          >
            <h3 className="text-xl font-bold">Why work with me?</h3>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>• Playful yet premium visual direction</li>
              <li>• Performance-focused animations</li>
              <li>• Clear communication and fast iteration</li>
            </ul>
            <p className="mt-4 text-white/70">Available for freelance, collaborations, and speaking engagements.</p>
          </motion.div>
        </div>

        <p className="mt-10 text-center text-sm text-white/60">© {new Date().getFullYear()} Your Name — Circus of Creativity</p>
      </div>
    </section>
  );
};

export default Contact;
