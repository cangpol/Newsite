'use client';

import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/context/LanguageContext';

const UpitraInNumbers = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white py-20">
      <Container>
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            <span className="text-[#F2994A]">UPITRA</span>
            <span className="text-[#0F294A]"> {language === 'ID' ? 'dalam Angka' : 'in Numbers'}</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-4xl">
            {language === 'ID' 
              ? 'Kami mendidik para pembawa perubahan masa depan; eksekutif masa kini, pemimpin generasi mendatang, dan para ahli yang memberikan dampak pada bisnis dan masyarakat.'
              : "We educate future game-changers; today's executives, next-generation leaders, and experts who make an impact on business and society."
            }
          </p>
        </div>

        {/* Background Banner & Overlay Card */}
        <div className="w-full relative h-auto min-h-[460px] py-12 rounded-3xl overflow-hidden flex items-center justify-center bg-slate-200">
          
          {/* Background Image */}
          <Image
            src="/logo.png" // Placeholder image
            alt="UPITRA in Numbers Banner"
            fill
            className="object-cover"
          />

          {/* Inner Frosted Glass Card */}
          <div className="relative z-10 w-[90%] max-w-5xl p-8 md:p-12 rounded-3xl bg-black/45 backdrop-blur-md border border-white/10 shadow-lg">
            
            {/* Grid Statistik (2 Baris x 4 Kolom) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center text-white">
              
              {/* Item 1 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">58</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Program Sarjana' : 'Undergraduate Program'}
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">14</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Program Vokasi' : 'Vocational Program'}
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">52</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Program Magister' : "Master's Program"}
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">23</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Program Doktoral' : 'Doctoral Program'}
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">37.000+</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Mahasiswa Terdaftar' : 'Registered Students'}
                </p>
              </div>

              {/* Item 6 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">96</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  QS Asia University Ranking
                </p>
              </div>

              {/* Item 7 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">1.900+</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Publikasi Internasional Dosen' : 'International Publications by Lecturers'}
                </p>
              </div>

              {/* Item 8 */}
              <div className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#F2994A] tracking-tight">400+</h3>
                <p className="text-xs lg:text-sm font-semibold text-white/90 mt-2 max-w-[180px] mx-auto leading-snug">
                  {language === 'ID' ? 'Dosen Asing' : 'Number of Foreign Lecturers'}
                </p>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default UpitraInNumbers;
