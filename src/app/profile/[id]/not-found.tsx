'use client'


import { useTheme } from '@/app/ui/ThemeContext';
import Link from 'next/link';
import "@/app/ui/hoverable.css";
 
export default function NotFound() {
    const {palette} = useTheme()
    
    return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the user profile.</p>
      <Link
        href="/profile"
        className="hoverable mt-4 rounded-md px-4 py-2 text-sm text-white transition-colors"
        style={
            {
                "--bg-color": palette.primary,
                "--bg-hover": palette.bgHover,
            } as any
        }
      >
        Go Back
      </Link>
    </main>
  );
}
