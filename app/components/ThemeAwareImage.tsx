'use client';

import Image from 'next/image';
import { useTheme } from './ThemeProvider';

interface ThemeAwareImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
}

export default function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  className,
  fill = true,
  sizes,
}: ThemeAwareImageProps) {
  const { theme } = useTheme();
  const src = theme === 'dark' ? darkSrc : lightSrc;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
    />
  );
}

