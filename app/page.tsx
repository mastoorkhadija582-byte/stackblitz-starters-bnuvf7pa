'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white font-sans">
      {/* 1. BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop')`, 
        }}
      />
      
      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-[1] bg-black/50 pointer-events-none" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-8">
        
        {/* TOP: BRAND NAME & CONTACT */}
        <header className="flex justify-between items-center">
          <div className="drop-shadow-lg">
            <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
              CUTLET <span className="text-[#00A86B]">RESTAURANT</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 text-gray-200">Expressway Khurrianwala</p>
          </div>
          
          <a 
            href="tel:+923356238176" 
            className="bg-[#00A86B] px-6 py-2 rounded-full font-bold text-xs uppercase shadow-lg hover:bg-white hover:text-[#013220] transition-all"
          >
            Call Now
          </a>
        </header>

        {/* MIDDLE: QUOTE & VIEW MENU BUTTON */}
        <main className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 
              className="text-5xl md:text-7xl font-black uppercase italic leading-tight text-white"
              style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.9))' }}
            >
              Savor the <br /> 
              <span className="text-[#00A86B]">Perfect Crunch</span>
            </h2>
           <p 
  className="text-lg italic font-bold text-white max-w-md mx-auto"
  style={{ filter: 'drop-shadow(0px 2px 5px rgba(0,0,0,1))' }}
>
  &quot;Quality is our primary ingredient. Every bite tells a delicious story.&quot;
</p>

          <Link href="/menu">
            <button className="bg-white text-[#013220] px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-[#00A86B] hover:text-white transition-all transform hover:scale-105 active:scale-95">
              View Menu
            </button>
          </Link>
        </main>

        {/* BOTTOM: RATINGS, ADDRESS & CREDITS */}
        <footer className="space-y-8 pt-10 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rating Section */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-[#00A86B] font-black text-2xl leading-none">4.7</p>
                <p className="text-[10px] uppercase font-bold tracking-tighter mt-1">Google (46)</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black uppercase text-yellow-400">★ ★ ★ ★ ★</p>
                <p className="text-xs font-medium text-gray-200 italic">Rs 500–1,000 per person</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex flex-col md:items-end justify-center md:text-right">
              <div className="flex items-center gap-2 mb-1 md:justify-end">
                <span className="text-lg">📍</span>
                <p className="text-xs font-black uppercase tracking-wider">Jhumra Rd, near Flyover, Khurrianwala</p>
              </div>
              <p className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">Open until 1:00 AM</p>
            </div>
          </div>

          {/* Developer Credit Line */}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <p className="text-[10px] uppercase font-bold text-white/50 tracking-[0.2em]">© CUTLET RESTAURANT</p>
            <p className="text-[10px] uppercase font-bold text-[#00A86B] tracking-[0.2em]">
              Developed by <span className="text-white">Khadija Mastoor</span>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
