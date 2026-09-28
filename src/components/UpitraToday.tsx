'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const UpitraToday = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            <span className="text-[#F2994A]">UPITRA</span>
            <span className="text-[#0F294A]"> Today</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base">
            {language === 'ID' 
              ? 'Sebuah langkah konkret dalam mewujudkan perubahan dan menciptakan dampak yang lebih besar bagi masyarakat.'
              : 'A concrete step in realizing change and creating a greater impact on society.'
            }
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Side: Featured News (7 Columns) */}
          <Link href="/berita/1" className="lg:col-span-7 h-[420px] rounded-2xl relative overflow-hidden group shadow-md bg-slate-200 cursor-pointer block">
            <Image
              src="/logo.png" // Placeholder image
              alt="Featured News"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col items-start z-10 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                Mahasiswa UPITRA Ciptakan Inovasi Energi Terbarukan Berbasis Limbah Pertanian
              </h3>
              <p className="text-xs text-slate-300 font-medium tracking-wide">
                25/09/2026 &bull; 3 MIN READ
              </p>
            </div>
          </Link>

          {/* Right Side: Stacked News (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Secondary News 1 */}
            <Link href="/berita/2" className="h-[198px] rounded-2xl relative overflow-hidden group shadow-md bg-slate-200 cursor-pointer block">
              <Image
                src="/logo.png" // Placeholder image
                alt="Secondary News 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 flex flex-col items-start z-10 w-full">
                <h3 className="text-sm md:text-base font-bold text-white mb-1.5 line-clamp-2">
                  Kolaborasi UPITRA Bersama Universitas Terkemuka Jepang untuk Program Pertukaran
                </h3>
                <p className="text-xs text-slate-300 font-medium tracking-wide">
                  23/09/2026 &bull; 2 MIN READ
                </p>
              </div>
            </Link>

            {/* Secondary News 2 */}
            <Link href="/berita/3" className="h-[198px] rounded-2xl relative overflow-hidden group shadow-md bg-slate-200 cursor-pointer block">
              <Image
                src="/logo.png" // Placeholder image
                alt="Secondary News 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 flex flex-col items-start z-10 w-full">
                <h3 className="text-sm md:text-base font-bold text-white mb-1.5 line-clamp-2">
                  Kuliah Umum: Menghadapi Tantangan Ekonomi Global di Era Digitalisasi
                </h3>
                <p className="text-xs text-slate-300 font-medium tracking-wide">
                  20/09/2026 &bull; 4 MIN READ
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10">
          <Link href="/berita">
            <button className="bg-[#F2994A] hover:bg-amber-400 text-slate-900 font-semibold rounded-full px-8 py-2.5 text-sm shadow-sm transition-colors duration-200">
              {language === 'ID' ? 'Semua Berita' : 'All News'}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default UpitraToday;
