'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Snowflake } from 'lucide-react';
import Link from 'next/link';

interface DecorationData {
  x: string;
  y: string;
  duration: number;
}

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [decorations, setDecorations] = useState<DecorationData[]>([]);

  useEffect(() => {
    const data = [...Array(10)].map(() => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      duration: 20 + Math.random() * 10,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDecorations(data);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {decorations.map((deco, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            initial={{
              x: deco.x,
              y: deco.y,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: deco.duration,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Snowflake className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            Winter Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have already upgraded to
            autonomous snow removal. Get a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-black/20 flex items-center justify-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#products"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white hover:text-sky-600 flex items-center justify-center space-x-2"
            >
              <span>View Products</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sky-100"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Financing Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Trial</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
