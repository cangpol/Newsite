import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['500', '600', '700', '800'] 
});

const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 md:gap-4 group">
      {/* Icon Logo */}
      <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
        <Image
          src="/logo-p.png"
          alt="UPITRA Logo Icon"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Divider */}
      <div className="w-[1px] h-9 bg-slate-300 opacity-70"></div>

      {/* Text Group */}
      <div className={`${plusJakarta.className} flex flex-col justify-center`}>
        {/* Main Brand Name */}
        <span className="text-[#0F294A] text-[22px] md:text-2xl font-extrabold tracking-wide leading-none mb-1">
          U<span className="text-[#F2994A]">P</span>ITRA
        </span>
        
        {/* Sub-text Name */}
        <span className="text-slate-500 text-[9px] md:text-[10px] font-semibold tracking-[0.15em] leading-none uppercase">
          Universitas Pignatelli Triputra
        </span>
      </div>
    </Link>
  );
};

export default BrandLogo;
