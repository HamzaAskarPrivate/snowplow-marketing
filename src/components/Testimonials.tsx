'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Facility Manager',
    company: 'Northgate Business Park',
    image: '👩‍💼',
    content: 'The SnowBot Pro has transformed how we manage winter weather at our 500,000 sq ft campus. It runs overnight so our parking lots are always clear by morning. Our maintenance costs dropped 60%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations',
    company: 'City of Oakdale',
    image: '👨‍💼',
    content: 'We deployed a fleet of SnowBot Industrial units across our downtown core. The 24/7 autonomous operation means safer sidewalks and happier residents. Best investment we\'ve made in years.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    company: 'Minneapolis, MN',
    image: '👩',
    content: 'As someone with mobility challenges, shoveling snow was always a struggle. The SnowBot Lite handles my driveway perfectly, and I can control it from my phone. Life-changing technology!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Property Manager',
    company: 'Alpine Ski Resort',
    image: '👨',
    content: 'Managing snow at a ski resort is a 24/7 job. The SnowBot fleet keeps our access roads and parking areas clear while our team focuses on the slopes. Guests love the reliability.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by <span className="gradient-text">Leaders</span>
          </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                      See what our customers have to say about their experience with
                      SnowPlowBot Robotics.
                    </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-500/20" />
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-sky-500/20" />
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{testimonials[currentIndex].image}</div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center space-x-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-sky-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
