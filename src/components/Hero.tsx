'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Snowflake } from 'lucide-react';
import Link from 'next/link';

// Snow effect configuration - increase SNOWFLAKE_COUNT for more snow
const SNOW_CONFIG = {
  SNOWFLAKE_COUNT: 50, // Increased from 20 for more immersive effect
  MIN_DURATION: 12,
  MAX_DURATION: 25,
  MAX_DELAY: 15,
};

// Generate varied snowflake sizes for depth effect
const getSnowflakeSize = (index: number) => {
  const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4 md:w-5 md:h-5', 'w-5 h-5 md:w-6 md:h-6', 'w-6 h-6 md:w-8 md:h-8'];
  return sizes[index % sizes.length];
};

// Generate varied opacity for depth perception
const getSnowflakeOpacity = (index: number) => {
  const opacities = ['text-sky-300/10', 'text-sky-300/15', 'text-sky-300/20', 'text-sky-300/25', 'text-sky-300/30'];
  return opacities[index % opacities.length];
};

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Enhanced animated snowflakes background with varied sizes and depths */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(SNOW_CONFIG.SNOWFLAKE_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${getSnowflakeOpacity(i)}`}
            initial={{
              x: Math.random() * 100 + '%',
              y: -20,
              rotate: 0,
              scale: 0.8 + Math.random() * 0.4
            }}
            animate={{
              y: '110vh',
              rotate: 360 + Math.random() * 180,
              x: `calc(${Math.random() * 100}% + ${Math.sin(i) * 50}px)`
            }}
            transition={{
              duration: SNOW_CONFIG.MIN_DURATION + Math.random() * (SNOW_CONFIG.MAX_DURATION - SNOW_CONFIG.MIN_DURATION),
              repeat: Infinity,
              delay: Math.random() * SNOW_CONFIG.MAX_DELAY,
              ease: 'linear'
            }}
          >
            <Snowflake className={getSnowflakeSize(i)} />
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sky-400 text-sm font-medium">Next-Gen Snow Removal Technology</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Autonomous
              <br />
              <span className="gradient-text">Snow Removal</span>
              <br />
              Robotics
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the future of snow management with our AI-powered robotic plows.
              Efficient, eco-friendly, and always ready for action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#products"
                className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-sky-500/30 flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/20 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '50+', label: 'Cities Served' },
                { value: '24/7', label: 'Operation' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Robot illustration placeholder */}
              <div className="animate-float">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-white/10" />
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Snowflake className="w-32 h-32 text-sky-400 mx-auto mb-4" />
                      <div className="text-white text-2xl font-bold">SnowBot Pro</div>
                      <div className="text-gray-400">Autonomous Plow</div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-sky-500 text-white px-4 py-2 rounded-lg shadow-xl"
                  >
                    AI Powered
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl"
                  >
                    Eco-Friendly
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-sky-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
