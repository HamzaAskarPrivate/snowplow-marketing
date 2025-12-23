'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Battery,
  Shield,
  Wifi,
  Leaf,
  Clock,
  Gauge,
  MapPin
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Navigation',
    description: 'Advanced machine learning algorithms for optimal path planning and obstacle avoidance.',
    color: 'sky',
  },
  {
    icon: Battery,
    title: 'Extended Battery Life',
    description: 'Up to 12 hours of continuous operation on a single charge with fast-charging capability.',
    color: 'green',
  },
  {
    icon: Shield,
    title: 'Built for Extremes',
    description: 'Industrial-grade components rated for temperatures as low as -40°F.',
    color: 'purple',
  },
  {
    icon: Wifi,
    title: 'Remote Monitoring',
    description: 'Real-time tracking and control through our mobile app and web dashboard.',
    color: 'blue',
  },
  {
    icon: Leaf,
    title: 'Zero Emissions',
    description: 'Fully electric operation with no direct emissions or noise pollution.',
    color: 'emerald',
  },
  {
    icon: Clock,
    title: '24/7 Autonomous',
    description: 'Set schedules or let AI decide the optimal times for snow removal.',
    color: 'orange',
  },
  {
    icon: Gauge,
    title: 'High Performance',
    description: 'Clear up to 30,000 sq ft per hour with precision accuracy.',
    color: 'red',
  },
  {
    icon: MapPin,
    title: 'GPS Precision',
    description: 'Centimeter-level accuracy for consistent coverage and no missed spots.',
    color: 'indigo',
  },
];

const colorClasses = {
  sky: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white',
  green: 'bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white',
  purple: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white',
  blue: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white',
  emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white',
  orange: 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white',
  red: 'bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white',
  indigo: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white',
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Cutting-Edge <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our robots combine advanced AI, robust engineering, and sustainable design
            to deliver unmatched snow removal performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
