import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Playfair_Display({ subsets: ['latin'] });

export const Logo = ({ className }: { className: string | null }) => {
  return <h1 className={cn(`${inter.className} text-6xl font-semi-bold tracking-wide`, className)}>Peer</h1>;
};
