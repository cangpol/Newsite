'use client';

import Container from './Container';
import { useLanguage } from '@/context/LanguageContext';

// Mock Data
const MOCK_AGENDA: any[] = []; // Kosong untuk state "Tidak ada agenda"
/* Contoh isi jika ada data:
const MOCK_AGENDA = [
  { date: '12', month: 'Okt', title: 'Wisuda Gelombang II Tahun 2026' }
];
*/

const MOCK_PENGUMUMAN = [
  { date: '19', month: 'Agu', title: 'Pembagian Jadwal Orientasi Mahasiswa Baru Tahun 2026' },
  { date: '26', month: 'Jun', title: 'Pengumuman Hasil Seleksi Jalur Mandiri Gelombang 1' },
  { date: '15', month: 'Mei', title: 'Jadwal Pendaftaran Ulang Mahasiswa Lama Semester Ganjil' },
  { date: '10', month: 'Apr', title: 'Pendaftaran Beasiswa Prestasi UPITRA 2026' },
  { date: '02', month: 'Mar', title: 'Informasi Pelaksanaan Ujian Tengah Semester Genap' },
];

const MOCK_GPR = [
  { type: 'Artikel', timestamp: '1 hari yang lalu', title: 'Mendikbudristek Apresiasi Kolaborasi Kampus Merdeka di Seluruh Indonesia' },
  { type: 'Artikel', timestamp: '3 hari yang lalu', title: 'Pemerintah Kucurkan Dana Riset untuk Inovasi Teknologi Tepat Guna' },
  { type: 'Artikel', timestamp: '5 hari yang lalu', title: 'Program Beasiswa LPDP 2026 Tahap 2 Resmi Dibuka' },
];

const InformationWidgets = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Kolom 1: Widget Agenda */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Agenda</h2>
            <div className="bg-[#F2994A] rounded-2xl p-5 shadow-sm min-h-[120px]">
              {MOCK_AGENDA.length === 0 ? (
                <div className="h-full flex items-center justify-start mt-2">
                  <p className="text-slate-900 font-medium text-sm">
                    {language === 'ID' ? 'Tidak ada agenda' : 'No upcoming agenda'}
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col divide-y divide-amber-600/30">
                  {MOCK_AGENDA.map((item, idx) => (
                    <li key={idx} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                      <div className="flex flex-col items-center justify-center w-12 flex-shrink-0 bg-white/20 rounded-lg p-2">
                        <span className="font-black text-xl leading-none text-slate-900">{item.date}</span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase">{item.month}</span>
                      </div>
                      <p className="font-bold text-sm text-slate-900 leading-snug hover:underline cursor-pointer">
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Kolom 2: Widget Pengumuman */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              {language === 'ID' ? 'Pengumuman' : 'Announcements'}
            </h2>
            <div className="bg-[#F2994A] rounded-2xl p-6 text-slate-900 shadow-sm flex flex-col divide-y divide-amber-600/30">
              {MOCK_PENGUMUMAN.map((item, idx) => (
                <div key={idx} className="flex gap-3 py-3.5 first:pt-0 last:pb-0 group">
                  <div className="w-16 flex-shrink-0 font-medium text-sm mt-0.5">
                    {item.date} {item.month}
                  </div>
                  <div className="font-bold text-sm leading-snug line-clamp-2 group-hover:underline cursor-pointer">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 3: Widget GPR */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">GPR</h2>
            <div className="bg-[#0F294A] rounded-2xl p-3 shadow-md relative">
              
              {/* Inner Content Card */}
              <div className="bg-white rounded-xl p-4 overflow-hidden relative max-h-[400px] flex flex-col">
                
                {/* Scroll Up Button (Mock) */}
                <button className="w-full flex justify-center text-slate-400 hover:text-slate-600 mb-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </button>

                {/* Articles List */}
                <div className="flex flex-col flex-grow overflow-hidden">
                  {MOCK_GPR.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2 border-b border-dashed border-slate-200 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 group cursor-pointer">
                      
                      {/* Header Item */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                          {item.type}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.timestamp}
                        </span>
                      </div>
                      
                      {/* Body Item */}
                      <div className="flex gap-3 items-start mt-1">
                        {/* Mini Icon/Thumbnail placeholder */}
                        <div className="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden relative flex items-center justify-center text-slate-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        </div>
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#F2994A] transition-colors">
                          {item.title}
                        </h4>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Scroll Down Button (Mock) */}
                <button className="w-full flex justify-center text-slate-400 hover:text-slate-600 mt-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default InformationWidgets;
