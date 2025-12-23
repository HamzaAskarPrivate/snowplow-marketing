'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '150+', label: 'Employees' },
  { value: '50+', label: 'Cities' },
  { value: '10M+', label: 'Sq Ft Cleared' },
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We\'re committed to making winter safer and more manageable for communities worldwide.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly pushing the boundaries of robotics and AI to deliver better solutions.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Every decision we make is guided by the needs and feedback of our customers.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in engineering, service, and sustainability.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pioneering the Future of
              <span className="gradient-text"> Snow Management</span>
            </h2>
            <p className="text-xl text-slate-400 mb-6">
              SnowPlow Robotics was born from a simple observation: traditional snow
              removal is inefficient, expensive, and often unreliable. We set out to
              change that.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Founded by a team of robotics engineers and winter weather experts,
              we\'ve developed autonomous snow removal systems that work around the
              clock, in any conditions, without human intervention.
            </p>
            <p className="text-lg text-slate-400">
              Today, our robots clear millions of square feet across North America
              and Northern Europe, helping municipalities, businesses, and homeowners
              stay safe and accessible throughout the winter months.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-sky-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
