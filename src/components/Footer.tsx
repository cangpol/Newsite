'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9fa] pt-16 flex flex-col border-t border-slate-200">
      <Container>
        
        {/* Baris Atas (Header Footer) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-slate-200 pb-8">
          
          {/* Sisi Kiri: Logo & Nama Kampus */}
          <div className="flex items-center">
            <BrandLogo />
          </div>

          {/* Sisi Kanan: Baris Ikon Media Sosial */}
          <div className="flex gap-2">
            {['Facebook', 'X', 'Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="bg-amber-100/70 hover:bg-white transition-colors p-2.5 rounded-lg text-slate-900 shadow-sm border border-transparent hover:border-slate-200 flex items-center justify-center"
                aria-label={social}
              >
                <span className="text-xs font-bold px-1">{social[0]}</span>
              </a>
            ))}
          </div>

        </div>

        {/* Baris Tengah (Navigasi Link 3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Kolom 1 (Sumber) */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 text-[#0F294A]">Sumber</h3>
            <ul className="space-y-3">
              {['Repositori', 'Perpustakaan', 'Kandaga / E-Resources', 'E-Learning', 'Gentra / Magazine', 'Radio', 'Peta Situs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs md:text-sm text-slate-800 hover:text-slate-950 font-medium leading-relaxed block cursor-pointer hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2 (Layanan) */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 text-[#0F294A]">Layanan</h3>
            <ul className="space-y-3">
              {['Layanan Terpadu', 'Layanan Teknologi Informasi', 'Layanan Disabilitas', 'Pusat Bahasa', 'Government Public Relation', 'Penyedia Barang dan Jasa', 'Bookstore', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs md:text-sm text-slate-800 hover:text-slate-950 font-medium leading-relaxed block cursor-pointer hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 (Arsip) */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 text-[#0F294A]">Arsip</h3>
            <ul className="space-y-3">
              {['Galeri Video', 'Inovasi dan Korporasi', 'Twibbon', 'JDIH'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs md:text-sm text-slate-800 hover:text-slate-950 font-medium leading-relaxed block cursor-pointer hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Baris Informasi Lokasi Kampus & Badge Aplikasi */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 pt-8 border-t border-slate-200">
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {['Kampus Jatinangor', 'Kampus Dipati Ukur', 'Kampus Pangandaran', 'Kontak'].map((loc) => (
              <Link key={loc} href="#" className="text-sm font-bold text-slate-800 hover:text-[#F2994A] transition-colors">
                {loc}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
            <div className="flex gap-2">
              <button className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-slate-800 transition-colors">
                App Store
              </button>
              <button className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-slate-800 transition-colors">
                Google Play
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600 border-l border-slate-300 pl-4">
              <span className="cursor-pointer hover:text-slate-900">LAPOR!</span>
              <span className="cursor-pointer hover:text-slate-900">Kebijakan Privasi</span>
              <span className="cursor-pointer hover:text-slate-900">Penyangkalan</span>
            </div>
          </div>

        </div>

      </Container>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#0F294A] mt-auto">
        <Container>
          <p className="text-center text-xs md:text-sm text-white/90 py-4 font-medium tracking-wide">
            &copy; 2026 Hak Cipta Dilindungi Undang-Undang
          </p>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;
