'use client';

import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/context/LanguageContext';

const CampusLifeUpitra = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white py-20">
      <Container>
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            <span className="text-[#0F294A]">{language === 'ID' ? 'Kehidupan Kampus di ' : 'Campus Life at '}</span>
            <span className="text-[#F2994A]">UPITRA</span>
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base">
            {language === 'ID' 
              ? 'Perjalanan akademik Anda akan penuh warna dengan peluang pengembangan diri melalui unit kegiatan mahasiswa, fasilitas asrama, olahraga, dan kesehatan yang komprehensif, serta kenangan tak terhitung bersama rekan mahasiswa lainnya.'
              : 'Your academic journey will be vibrant with opportunities for self-development through student activity units, comprehensive dormitory, sports, and health facilities, as well as countless memorable experiences with your fellow students.'
            }
          </p>
        </div>

        {/* Main Banner Image */}
        <div className="relative w-full aspect-video md:h-[480px] rounded-3xl overflow-hidden bg-slate-200 shadow-md">
          <Image
            src="/logo.png" // Placeholder image
            alt="Campus Life at UPITRA"
            fill
            className="object-cover"
          />
        </div>

        {/* Statistics Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">38.000+</h3>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">
              {language === 'ID' ? 'Total Mahasiswa UPITRA' : 'Total UPITRA Students'}
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">1000+</h3>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">
              {language === 'ID' ? 'Total Mahasiswa Internasional' : 'Total International Students'}
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">200+</h3>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide">
              {language === 'ID' ? 'Total Organisasi Mahasiswa' : 'Total Student Organizations'}
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default CampusLifeUpitra;
