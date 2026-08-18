import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo({ href = '/' }) {
  return (
    <Link href={href} aria-label="Joey's Atelier home" className="flex items-center gap-2.5">
      <span className="relative h-10 w-11 shrink-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/LOGO.PNG"
          alt=""
          width={500}
          height={500}
          className="absolute -left-[22px] -top-[24px] h-[88px] w-[88px] max-w-none object-contain brightness-0 invert"
        />
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px]">
        Joey&apos;s Atelier
      </span>
    </Link>
  );
}
