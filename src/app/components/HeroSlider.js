'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      video: true,
      src: '/videos/intro_little_step.mp4',
      gradient: '',
      title: '',
      desc: '',
      link: ''
    },
    { 
      title: '10% OFF on Orders Over 1000₺', 
      desc: 'Shop more, save more — limited time only!', 
      gradient: 'from-green-500 to-emerald-700',
      link: '#'
    },
    { 
      title: 'Disney Collection', 
      desc: '', 
      gradient: 'from-purple-500 to-purple-700',
      link: '/category/disney'
    },
    { 
      title: 'New Dresses', 
      desc: '', 
      gradient: 'from-pink-500 to-red-500',
      link: '/category/dress'
    },
    { 
      title: 'Baby Rompers', 
      desc: "", 
      gradient: 'from-blue-400 to-cyan-400',
      link: '/category/baby'
    }
  ];

  // geçiş aralığı 7 sn
  useEffect(() => {
    if (slides[currentSlide].video) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  // sadece aktif slaytı al
  const slide = slides[currentSlide];

  return (
    <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${slide.video ? 'h-[400px] md:h-[550px] lg:h-[730px]' : 'h-64 md:h-96 lg:h-[450px]'}`}>
      {slide.video ? (
        <video
          key={currentSlide}
          src={slide.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => {
            setCurrentSlide(1);
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}
                      transition-all duration-[1500ms] ease-in-out translate-x-0 opacity-100`}
        >
          <div className="flex items-center justify-center h-full text-white text-center px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl mb-8">{slide.desc}</p>
              {slide.title === '10% OFF on Orders Over 1000₺' ? (
                <button
                  onClick={() => {
                    const el = document.getElementById('categories');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-800 px-6 md:px-8 py-2 md:py-3 cursor-pointer rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  Discover Now
                </button>
              ) : (
                <Link href={slide.link}>
                  <button className="bg-white text-gray-800 px-6 md:px-8 py-2 md:py-3 cursor-pointer rounded-full font-bold hover:shadow-xl transition transform hover:-translate-y-1">
                    Discover Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
