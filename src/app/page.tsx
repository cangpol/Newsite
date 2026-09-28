'use client';

import { useLanguage } from "@/context/LanguageContext";
import Slideshow from "@/components/Slideshow";
import StudyAtUpitra from "@/components/StudyAtUpitra";
import UpitraToday from "@/components/UpitraToday";
import Link from 'next/link';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Slideshow taking full width right below the navbar */}
      <Slideshow />
      
      {/* Gray Section containing the floating buttons */}
      <div className="bg-[#F0F2F5] w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {/* UPITRA BERDAMPAK Button */}
            <Link 
              href="/berdampak" 
              className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 flex items-center justify-center p-6 w-full max-w-[320px] h-[180px] hover:-translate-y-1"
            >
              <div className="flex flex-col items-center leading-none">
                <span className="text-[#F2994A] font-extrabold text-2xl tracking-wide">UPITRA</span>
                <span className="text-[#8B1832] font-black text-2xl tracking-tight mt-1">{language === 'ID' ? 'BERDAMPAK' : 'IMPACT'}</span>
              </div>
            </Link>

            {/* BERITA Button */}
            <Link 
              href="/berita" 
              className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 flex items-center justify-center p-6 w-full max-w-[320px] h-[180px] hover:-translate-y-1"
            >
              <div className="flex items-center">
                <span className="text-[#0284C7] font-black text-4xl tracking-tighter">{language === 'ID' ? 'BERITA' : 'NEWS'}</span>
              </div>
            </Link>

            {/* SUSTAINABLE DEVELOPMENT GOALS Button */}
            <Link 
              href="/sdgs" 
              className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 flex items-center justify-center p-6 w-full max-w-[320px] h-[180px] hover:-translate-y-1"
            >
              <div className="flex flex-col items-center justify-center leading-none text-[#0284C7] font-extrabold text-lg tracking-tight text-center">
                <span>SUSTAINABLE</span>
                <span className="mt-1">DEVELOPMENT</span>
                <span className="mt-1 text-3xl font-black tracking-tighter">GOALS</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-full bg-white py-24 overflow-hidden">
        {/* Watermark Logo */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <img src="/logo.png" alt="Watermark" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
            {language === 'ID' ? 'Jadikan ' : 'Make '}
            <span className="text-[#F2994A]">Upitra</span>
            {language === 'ID' ? ' pilihan Anda dan raih masa depan cerah!' : ' your choice and achieve a bright future!'}
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl font-medium mb-12">
            {language === 'ID' 
              ? 'Dengan reputasi yang luar biasa, lingkungan akademik berkualitas tinggi, fasilitas yang komprehensif, inklusivitas, pendidik ahli, dan peluang kolaborasi industri, Upitra siap memberikan pengalaman belajar terbaik. Kami mendukung potensi Anda untuk tumbuh menjadi pencapaian nyata, didukung oleh jaringan karir yang luas.'
              : 'With an outstanding reputation, a high-quality academic environment, comprehensive facilities, inclusivity, expert educators, and opportunities for industry collaboration, Upitra is ready to provide the best learning experience. We support your potential to grow into real achievements, backed by a vast career network.'}
          </p>

          <div className="flex items-center justify-center space-x-2 select-none">
            <span className="text-[#E11D48] font-black text-2xl md:text-3xl italic">YES!</span>
            <span className="text-gray-900 font-bold text-xl md:text-2xl">pilih</span>
            <span className="text-[#0284C7] font-black text-2xl md:text-3xl">UPITRA</span>
          </div>
        </div>
      </div>

      {/* Stats Section with Horizontal Orange Band */}
      <div className="relative w-full py-16 md:py-24 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
        {/* The Orange Band Background (straddling horizontally) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 md:h-44 bg-[#F2994A] z-0"></div>

        {/* The 3 Cards Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 flex flex-col items-center justify-center text-center h-[240px] md:h-[300px] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <p className="text-slate-600 text-sm md:text-base font-medium mb-4 md:mb-6 max-w-[200px]">
                {language === 'ID' ? 'Upitra Terakreditasi sebagai' : 'Upitra Accredited as'}
              </p>
              <h3 className="text-[#F2994A] text-4xl md:text-[44px] font-black uppercase tracking-wide">
                UNGGUL
              </h3>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 flex flex-col items-center justify-center text-center h-[240px] md:h-[300px] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <p className="text-slate-600 text-sm md:text-base font-medium mb-4 md:mb-6 max-w-[220px]">
                {language === 'ID' ? 'Program Studi Terakreditasi Internasional' : 'Internationally Accredited Study Programs'}
              </p>
              <h3 className="text-[#F2994A] text-5xl md:text-[64px] font-black leading-none">
                76
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 flex flex-col items-center justify-center text-center h-[240px] md:h-[300px] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <p className="text-slate-600 text-sm md:text-base font-medium mb-4 md:mb-6 max-w-[200px]">
                {language === 'ID' ? 'Peringkat Universitas Dunia QS' : 'QS World University Rankings'}
              </p>
              <h3 className="text-[#F2994A] text-5xl md:text-[64px] font-black leading-none">
                #496
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Study at UPITRA Section */}
      <StudyAtUpitra />

      {/* UPITRA Today News Section */}
      <UpitraToday />
    </div>
  );
}
