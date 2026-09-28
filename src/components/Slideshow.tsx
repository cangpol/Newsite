'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Container from './Container';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    /*title: {
      ID: 'Masa Depan Cerah Dimulai di Sini',
      EN: 'A Bright Future Starts Here',
    },
    subtitle: {
      ID: 'Bergabunglah dengan UPITRA dan raih mimpimu dengan pendidikan berkualitas tinggi.',
      EN: 'Join UPITRA and achieve your dreams with high-quality education.',
    }*/
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    /*title: {
      ID: 'Fasilitas Kelas Dunia',
      EN: 'World-Class Facilities',
    },
    subtitle: {
      ID: 'Kami menyediakan fasilitas riset dan pembelajaran terbaik untuk mendukung potensi mahasiswa.',
      EN: 'We provide the best research and learning facilities to support student potential.',
    }*/
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    /*title: {
      ID: 'Riset dan Inovasi',
      EN: 'Research and Innovation',
    },
    subtitle: {
      ID: 'Menjadi pionir dalam mengembangkan teknologi dan pengetahuan untuk kemajuan bangsa.',
      EN: 'Becoming a pioneer in developing technology and knowledge for the nation\'s progress.',
    }*/
  }
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
            }}
          ></div>
          
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <Container className="absolute inset-0 flex items-center justify-start h-full px-6 lg:px-8">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>

            </div>
          </Container>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-y-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? 'bg-[#F2994A] w-10 h-3' : 'bg-gray-400 w-3 h-3 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
