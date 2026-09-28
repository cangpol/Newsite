'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { useLanguage } from '@/context/LanguageContext';

const StudyAtUpitra = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <Container>
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-[#0F294A]">{language === 'ID' ? 'Belajar di ' : 'Study at '}</span>
            <span className="text-[#F2994A]">UPITRA</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-4xl mb-8">
            {language === 'ID' 
              ? 'Rasakan pengalaman belajar di universitas ternama dunia yang inklusif dan unggul, melakukan riset inovatif, dan berkontribusi terhadap masalah nyata di masyarakat. Kembangkan potensi Anda melalui berbagai program akademik unggulan dan peluang beasiswa yang dirancang untuk memberdayakan mahasiswa dari beragam latar belakang.'
              : 'Experience a world-renowned university that is inclusive and excellent, conducts innovative research, and contributes to the real problems of society. Develop your potential through a range of excellent academic programs and scholarship opportunities designed to empower students from diverse backgrounds.'
            }
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Side: 1 Tall Card */}
          <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] lg:h-[500px] w-full shadow-md bg-slate-200 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
              alt="Programs at UPITRA"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            
            {/* Content Bottom Left */}
            <div className="absolute bottom-0 left-0 p-8 flex flex-col items-start z-10">
              <h3 className="text-2xl font-bold text-white mb-4 shadow-sm">Programs</h3>
              <Link href="/programs">
                <button className="bg-[#F2994A] hover:bg-amber-400 transition-colors duration-300 text-[#1A1A1A] font-semibold rounded-full px-6 py-2.5 text-sm shadow-md">
                  {language === 'ID' ? 'Lihat semua' : 'See all'}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: 2 Stacked Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Top Card */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[16/9] lg:h-[238px] w-full shadow-md bg-slate-200 cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="International Affairs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col items-start z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 shadow-sm">International Affairs</h3>
                <Link href="/international">
                  <button className="bg-[#F2994A] hover:bg-amber-400 transition-colors duration-300 text-[#1A1A1A] font-semibold rounded-full px-5 py-2 text-sm shadow-md">
                    {language === 'ID' ? 'Lihat semua' : 'See all'}
                  </button>
                </Link>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[16/9] lg:h-[238px] w-full shadow-md bg-slate-200 cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=2070&auto=format&fit=crop"
                alt="Scholarships"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col items-start z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 shadow-sm">Scholarships</h3>
                <Link href="/scholarships">
                  <button className="bg-[#F2994A] hover:bg-amber-400 transition-colors duration-300 text-[#1A1A1A] font-semibold rounded-full px-5 py-2 text-sm shadow-md">
                    {language === 'ID' ? 'Lihat semua' : 'See all'}
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default StudyAtUpitra;
