import localFont from 'next/font/local';

// Font for headings
export const integral = localFont({
  src: '../../public/fonts/IntegralCF-Bold.otf',
  variable: '--font-integral',
});

// Default font
export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-satoshi',
});
