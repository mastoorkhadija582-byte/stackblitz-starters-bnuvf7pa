import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 'deals', title: '1. Our Deals', desc: 'Tap to view options' },
  { id: 'special-burgers', title: '2. Special Burgers', desc: 'Tap to view options' },
  { id: 'basic-burgers', title: '3. Basic Burgers', desc: 'View our classic range' },
  { id: 'cutlet-bites', title: '4. Cutlet Bites', desc: 'Wings, wraps, and more' },
  { id: 'special-pizzas', title: '5. Special Pizzas', desc: 'Loaded, Crown, and Kabab crust' },
  { id: 'drinks', title: '6. Drinks', desc: 'Refreshing sodas and pitchers' },
];

export default function MenuVarietyPage() {
  return (
    <div className="min-h-screen bg-[#F9FBFA] text-[#013220] p-10
 relative overflow-hidden">
      {/* High Quality Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-3 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
      <header className="mb-11 flex justify-between items-center bg-[#00A86B]/80 p- rounded-2xl shadow-xl border border-white/20">
  <div className="flex flex-col">
    <h1 className="text-5xl font-black italic uppercase text-white leading-none">
      Menu <span className="text-[#013220]">Variety</span>
    </h1>
  </div>
  
  <Link 
    href="/" 
    className="bg-[#013220] text-white px-5 py- rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#013220] transition-all duration-300 shadow-md"
  >
    Back to Home
  </Link>
</header>
        <div className="grid gap-5 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <Link href={`/menu/${cat.id}`} key={cat.id}>
              <div className="bg-white/100 border-2 border-gray-400 p-8 rounded-2xl hover:border-[#00A86B] transition-all cursor-pointer group shadow-sm">
                <h2 className="text-3xl font-black uppercase group-hover:text-[#00A86B] transition-colors">
                  {cat.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )};