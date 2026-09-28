'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navData: Record<string, any[]> = {
    ID: [
      { 
        name: 'Tentang Upitra', 
        href: '#',
        megaMenu: [
          {
            title: 'UNIVERSITAS',
            links: [
              { name: 'Universitas', href: '/universitas' },
              { name: 'Data dan Fakta', href: '/data-fakta' },
              { name: 'Sejarah', href: '/sejarah' },
              { name: 'Visi, Misi dan Tujuan', href: '/visi-misi' },
              { name: 'Tugas dan Fungsi', href: '/tugas-fungsi' },
              { name: 'Identitas', href: '/identitas' },
              { name: 'Rencana Strategis', href: '/renstra' },
              { name: 'Fasilitas', href: '/fasilitas' },
              { name: 'Rute dan Peta', href: '/rute-peta' },
            ]
          },
          {
            title: 'STRUKTUR UPITRA',
            links: [
              { name: 'Pimpinan Universitas', href: '/pimpinan-univ' },
              { name: 'Pimpinan Fakultas', href: '/pimpinan-fak' },
              { name: 'Pimpinan Direktorat', href: '/pimpinan-dir' },
              { name: 'Kepala Satuan', href: '/kepala-satuan' },
              { name: 'Kepala Kantor', href: '/kepala-kantor' },
              { name: 'Kepala Pusat', href: '/kepala-pusat' },
            ]
          },
          {
            title: 'PUSAT UNGGULAN',
            links: [
              { name: 'Center of SDGS', href: '/center-sdgs' },
              { name: 'Center of ESS', href: '/center-ess' },
              { name: 'FiNder U-CoE', href: '/finder-ucoe' },
              { name: 'Digitalisasi dan Pengembangan Budaya Sunda', href: '/budaya-sunda' },
              { name: 'PUI-PT Inovasi Pelayanan Kefarmasian', href: '/inovasi-farmasi' },
              { name: 'Academic Health System', href: '/academic-health' },
            ]
          },
          {
            title: 'ARSIP DIGITAL',
            links: [
              { name: 'Arsip', href: '/arsip' },
              { name: 'Laporan Tahunan', href: '/laporan-tahunan' },
            ]
          }
        ]
      },
      { 
        name: 'Akademik', 
        href: '#',
        dropdown: [
          { name: 'Program Studi', href: '/program-studi' },
          { name: 'Kalender Akademik', href: '/kalender' },
          { name: 'Peraturan Akademik', href: '/peraturan' }
        ]
      },
      { 
        name: 'Mahasiswa', 
        href: '#',
        dropdown: [
          { name: 'Organisasi Kemahasiswaan', href: '/ormawa' },
          { name: 'Prestasi', href: '/prestasi' },
          { name: 'Layanan Mahasiswa', href: '/layanan' }
        ]
      },
      { 
        name: 'Penelitian', 
        href: '#',
        dropdown: [
          { name: 'Pusat Penelitian', href: '/pusat-penelitian' },
          { name: 'Pengabdian Masyarakat', href: '/pengabdian' },
          { name: 'Publikasi', href: '/publikasi' }
        ]
      },
      {
        name: 'Kerjasama',
        href: '#',
        dropdown: [
          { name: 'Kerjasama Dalam Negeri', href: '/kerjasama-dalam-negeri' },
          { name: 'Kerjasama Luar Negeri', href: '/kerjasama-luar-negeri' }
        ]
      }
    ],
    EN: [
      { 
        name: 'About Upitra', 
        href: '#',
        megaMenu: [
          {
            title: 'UNIVERSITY',
            links: [
              { name: 'University', href: '/universitas' },
              { name: 'Data and Facts', href: '/data-fakta' },
              { name: 'History', href: '/sejarah' },
              { name: 'Vision, Mission and Goals', href: '/visi-misi' },
              { name: 'Duties and Functions', href: '/tugas-fungsi' },
              { name: 'Identity', href: '/identitas' },
              { name: 'Strategic Plan', href: '/renstra' },
              { name: 'Facilities', href: '/fasilitas' },
              { name: 'Routes and Maps', href: '/rute-peta' },
            ]
          },
          {
            title: 'UPITRA STRUCTURE',
            links: [
              { name: 'University Leaders', href: '/pimpinan-univ' },
              { name: 'Faculty Leaders', href: '/pimpinan-fak' },
              { name: 'Directorate Leaders', href: '/pimpinan-dir' },
              { name: 'Unit Heads', href: '/kepala-satuan' },
              { name: 'Office Heads', href: '/kepala-kantor' },
              { name: 'Center Heads', href: '/kepala-pusat' },
            ]
          },
          {
            title: 'CENTERS OF EXCELLENCE',
            links: [
              { name: 'Center of SDGS', href: '/center-sdgs' },
              { name: 'Center of ESS', href: '/center-ess' },
              { name: 'FiNder U-CoE', href: '/finder-ucoe' },
              { name: 'Digitalization and Development of Sundanese Culture', href: '/budaya-sunda' },
              { name: 'PUI-PT Pharmacy Service Innovation', href: '/inovasi-farmasi' },
              { name: 'Academic Health System', href: '/academic-health' },
            ]
          },
          {
            title: 'DIGITAL ARCHIVES',
            links: [
              { name: 'Archives', href: '/arsip' },
              { name: 'Annual Report', href: '/laporan-tahunan' },
            ]
          }
        ]
      },
      { 
        name: 'Academics', 
        href: '#',
        dropdown: [
          { name: 'Study Programs', href: '/program-studi' },
          { name: 'Academic Calendar', href: '/kalender' },
          { name: 'Academic Regulations', href: '/peraturan' }
        ]
      },
      { 
        name: 'Students', 
        href: '#',
        dropdown: [
          { name: 'Student Organizations', href: '/ormawa' },
          { name: 'Achievements', href: '/prestasi' },
          { name: 'Student Services', href: '/layanan' }
        ]
      },
      { 
        name: 'Research', 
        href: '#',
        dropdown: [
          { name: 'Research Centers', href: '/pusat-penelitian' },
          { name: 'Community Service', href: '/pengabdian' },
          { name: 'Publications', href: '/publikasi' }
        ]
      },
      {
        name: 'Partnerships',
        href: '#',
        dropdown: [
          { name: 'Domestic Partnerships', href: '/domestic-partnerships' },
          { name: 'International Partnerships', href: '/international-partnerships' }
        ]
      }
    ]
  };

  const navLinks = navData[language];

  return (
    <header className="fixed w-full z-50 flex flex-col shadow-md">
      {/* Top Bar */}
      <div 
        className={`bg-slate-50/80 backdrop-blur-sm text-slate-600 border-b border-slate-200 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 py-0 border-transparent' : 'max-h-12 py-1.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center text-xs md:text-sm font-medium">
          {/* Right Side Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            <Link href="/kepakaran" className="hover:text-blue-900 transition-colors">{language === 'ID' ? 'Kepakaran' : 'Expertise'}</Link>
            <Link href="/perpustakaan" className="hover:text-blue-900 transition-colors">{language === 'ID' ? 'Perpustakaan' : 'Library'}</Link>
            <Link href="/ppid" className="hover:text-blue-900 transition-colors">PPID</Link>
            <Link href="/e-learning" className="hover:text-blue-900 transition-colors">E-Learning</Link>
            <Link href="/majalah" className="hover:text-blue-900 transition-colors">{language === 'ID' ? 'Majalah' : 'Magazine'}</Link>
            <Link href="/wakaf" className="hover:text-blue-900 transition-colors">{language === 'ID' ? 'Wakaf' : 'Endowment'}</Link>
            
            <div className="relative group cursor-pointer flex items-center hover:text-blue-900 transition-colors ml-2 border-l border-slate-300 pl-4">
              Login
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            
            <Link 
              href="/dana-abadi" 
              className="border border-slate-300 text-slate-700 px-3 py-1 rounded-full hover:bg-slate-100 hover:text-blue-900 transition-colors ml-2"
            >
              {language === 'ID' ? 'Dana Abadi' : 'Endowment Fund'}
            </Link>

            {/* Search Icon */}
            <button className="hover:text-blue-900 transition-colors ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Language Flag Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center hover:opacity-80 transition-opacity ml-2"
              title={language === 'ID' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <img 
                src={language === 'ID' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'} 
                alt={language === 'ID' ? 'ID' : 'EN'} 
                className="h-3.5 w-5 object-cover rounded-[2px] shadow-sm border border-slate-200"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0 h-full py-2">
              <BrandLogo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8 h-full">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className={`h-full flex items-center ${link.megaMenu ? "" : "relative group"}`}
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`text-slate-800 hover:text-blue-900 font-medium text-sm lg:text-base flex items-center transition-colors duration-200 h-full relative ${link.megaMenu ? 'group' : ''}`}
                  >
                    {link.name}
                    {(link.dropdown || link.megaMenu) && (
                      <svg className="ml-1 h-4 w-4 text-slate-400 group-hover:text-blue-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 ${link.megaMenu ? 'group-hover:w-full' : 'group-hover:w-full'}`}></span>
                  </Link>

                  {/* Desktop Normal Dropdown */}
                  {link.dropdown && (
                    <div 
                      className={`absolute left-0 top-full mt-0 w-56 bg-white/95 backdrop-blur-md border border-gray-100 rounded-b-md shadow-lg transition-all duration-200 transform origin-top ${
                        openDropdown === link.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                    >
                      <div className="py-2">
                        {link.dropdown.map((sublink: any) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100/50 hover:text-[#0284C7]"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Desktop Mega Menu Dropdown */}
                  {link.megaMenu && (
                    <div 
                      className={`absolute left-0 top-full w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl transition-all duration-300 origin-top z-40 ${
                        openDropdown === link.name ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                          {link.megaMenu.map((column: any) => (
                            <div key={column.title}>
                              <h3 className="text-gray-400 font-extrabold text-sm tracking-widest mb-4 uppercase">
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.links.map((sublink: any) => (
                                  <li key={sublink.name}>
                                    <Link
                                      href={sublink.href}
                                      className="text-gray-700 hover:text-[#0284C7] text-sm font-bold transition-colors"
                                    >
                                      {sublink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Daftar Button */}
              <div className="flex items-center pl-2 ml-2">
                <Link
                  href="https://pmb.upitra.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F2994A] hover:bg-[#E5893A] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                >
                  {language === 'ID' ? 'Daftar PMB' : 'Apply Now'}
                </Link>
              </div>
            </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center hover:opacity-80 transition-opacity"
              title={language === 'ID' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <img 
                src={language === 'ID' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'} 
                alt={language === 'ID' ? 'ID' : 'EN'} 
                className="h-5 w-7 object-cover rounded-[2px] shadow-sm border border-gray-200"
              />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#334155] hover:text-[#0284C7] focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 border-t border-gray-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-50 last:border-0 pb-1">
              {link.dropdown || link.megaMenu ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="w-full flex justify-between items-center px-3 py-3 text-base font-semibold text-[#334155] hover:text-[#0284C7] hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.name}
                    <svg 
                      className={`h-4 w-4 transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="pl-6 pb-2 space-y-2">
                      {link.dropdown && link.dropdown.map((sublink: any) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0284C7] hover:bg-gray-50 rounded-md"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                      
                      {/* Mobile rendering for megaMenu */}
                      {link.megaMenu && link.megaMenu.map((col: any) => (
                        <div key={col.title} className="pt-2">
                          <h4 className="text-xs font-bold text-gray-400 uppercase mb-2 pl-3">{col.title}</h4>
                          <div className="space-y-1">
                            {col.links.map((sublink: any) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0284C7] hover:bg-gray-50 rounded-md"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-[#334155] hover:text-[#0284C7] hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 px-3">
              <Link
                href="https://pmb.upitra.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-[#F2994A] hover:bg-[#E5893A] text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                {language === 'ID' ? 'Daftar PMB' : 'Apply Now'}
              </Link>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
