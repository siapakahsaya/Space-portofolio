import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emily Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'The coffee here is absolutely amazing! The baristas are skilled and friendly, and the atmosphere is perfect for both working and socializing.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Caffeine Culture has become my go-to spot for client meetings. The avocado toast is phenomenal, and their cold brew is the best in town!',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'I love the vibe here! The staff is so welcoming, and they remember my order every time. Their seasonal drinks are always something to look forward to.',
      rating: 4
    },
    {
      id: 4,
      name: 'James Wilson',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'As someone who works remotely, I appreciate a café with reliable WiFi and comfortable seating. Caffeine Culture delivers on both, plus their espresso is top-notch!',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The experiences of our valued guests speak volumes
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-coffee-dark text-white hover:bg-coffee-medium transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-coffee-dark text-white hover:bg-coffee-medium transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cream">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="flex justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-coffee-medium italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <p className="font-semibold text-coffee-dark">
                {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-coffee-dark' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;