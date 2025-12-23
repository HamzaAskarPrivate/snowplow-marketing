'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Snowflake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'SnowBot Lite',
    tagline: 'Perfect for Residential',
    price: '$4,999',
    image: '🏠',
    features: [
      'Up to 10,000 sq ft coverage',
      '6-hour battery life',
      'Mobile app control',
      'Basic obstacle detection',
      'Weatherproof IP65',
      '1-year warranty',
    ],
    popular: false,
  },
  {
    name: 'SnowBot Pro',
    tagline: 'Commercial Grade',
    price: '$12,999',
    image: '🏢',
    features: [
      'Up to 50,000 sq ft coverage',
      '12-hour battery life',
      'AI path optimization',
      'Advanced LIDAR navigation',
      'Fleet management ready',
      'Remote monitoring dashboard',
      '3-year warranty',
    ],
    popular: true,
  },
  {
    name: 'SnowBot Industrial',
    tagline: 'Maximum Power',
    price: '$29,999',
    image: '🏭',
    features: [
      'Unlimited coverage area',
      '24-hour battery swap system',
      'Multi-unit coordination',
      'Industrial plow attachments',
      'Enterprise API access',
      'Dedicated support team',
      '5-year warranty',
    ],
    popular: false,
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-950 snow-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your <span className="gradient-text">SnowBot</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From residential driveways to industrial complexes, we have the perfect
            autonomous snow removal solution for your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                product.popular
                  ? 'ring-2 ring-sky-500 scale-105 md:scale-110'
                  : 'hover:shadow-2xl'
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 left-0 right-0 bg-sky-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${product.popular ? 'pt-14' : ''}`}>
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">{product.tagline}</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {product.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">starting</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-full font-semibold transition-all ${
                    product.popular
                      ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 text-sky-500 hover:text-sky-600 font-semibold"
          >
            <span>Contact our sales team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
