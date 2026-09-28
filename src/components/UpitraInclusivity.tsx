'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/context/LanguageContext';

const UpitraInclusivity = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('fasilitas-keberpihakan');

  return (
    <section className="w-full bg-slate-50 py-20">
      <Container>
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F294A] mb-3">
            UPITRA Promotes Inclusivity and Equality
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed">
            {language === 'ID' 
              ? 'UPITRA berkomitmen untuk menciptakan lingkungan pendidikan yang inklusif dan berkeadilan bagi mahasiswa, staf, fakultas, dan seluruh pemangku kepentingan, memastikan setiap orang dapat secara penuh mengoptimalkan potensinya.'
              : 'UPITRA is committed to creating an inclusive and equitable educational environment for students, staff, faculty, and all stakeholders, ensuring that everyone can fully optimize their potential.'
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveFilter('fasilitas-disabilitas')}
            className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
              activeFilter === 'fasilitas-disabilitas'
                ? 'bg-[#F2994A] text-slate-900 shadow-sm'
                : 'border border-[#F2994A] bg-[#FFF8F0] text-slate-800 hover:bg-[#F2994A]/20'
            }`}
          >
            {language === 'ID' ? 'Fasilitas Disabilitas' : 'Disability Facilities'}
          </button>
          
          <button
            onClick={() => setActiveFilter('fasilitas-keberpihakan')}
            className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
              activeFilter === 'fasilitas-keberpihakan'
                ? 'bg-[#F2994A] text-slate-900 shadow-sm'
                : 'border border-[#F2994A] bg-[#FFF8F0] text-slate-800 hover:bg-[#F2994A]/20'
            }`}
          >
            {language === 'ID' ? 'Fasilitas Keberpihakan' : 'Pro-Equity Facilities'}
          </button>
        </div>

        {/* Image Gallery Layout */}
        <div className="flex flex-col">
          
          {/* Baris Pertama (2 Foto) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <div className="md:col-span-5 h-[280px] md:h-[340px] rounded-2xl relative overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
              <Image
                src="/logo.png" // Placeholder image
                alt="Inclusivity 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
            <div className="md:col-span-7 h-[280px] md:h-[340px] rounded-2xl relative overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
              <Image
                src="/logo.png" // Placeholder image
                alt="Inclusivity 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
          </div>

          {/* Baris Kedua (3 Foto) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[220px] md:h-[260px] rounded-2xl relative overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
              <Image
                src="/logo.png" // Placeholder image
                alt="Inclusivity 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
            <div className="h-[220px] md:h-[260px] rounded-2xl relative overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
              <Image
                src="/logo.png" // Placeholder image
                alt="Inclusivity 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
            <div className="h-[220px] md:h-[260px] rounded-2xl relative overflow-hidden shadow-sm group bg-slate-200 cursor-pointer">
              <Image
                src="/logo.png" // Placeholder image
                alt="Inclusivity 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default UpitraInclusivity;
