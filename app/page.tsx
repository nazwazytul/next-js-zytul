"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Delayed redirection to 'pages/homepage'
    const redirectTimeout = setTimeout(() => {
      router.push('pages/homePage');
    }, 2000); // Adjust the delay time as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefbf2]">
      <div className="animate-pulse opacity-0">
        <h1 className="text-3xl text-black font-bold">Loading...</h1>
        <p className="mt-4 text-black">Sedang menuju ke GlowEvermore</p>
      </div>
    </div>
  );
}
