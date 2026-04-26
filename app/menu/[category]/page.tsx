'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const menuData: any = {
  "deals": { 
    title: "Our Deals", 
    items: [
      { name: "Couple's Combo 1", price: "900", desc: ["1 Zinger Burger", "1 Small Pizza", "Half Liter Pepsi"] },
      { name: "Squad Combo", price: "1800", desc: ["2 Zinger Burgers", "1 Medium Pizza", "1 Liter Pepsi"] },
      { name: "Happy Family Meal", price: "3000", desc: ["4 Zinger Burgers", "1 Large Pizza", "1.5 Liter Pepsi"] },
      { name: "Couple's Combo 2", price: "1050", desc: ["1 Beef Cheese Burger", "1 Small Pizza", "Half Liter Pepsi"] },
      { name: "3 Couple Combo", price: "800", desc: ["1 Chick-e-Wrap", "1 Small Pizza", "Half Liter Pepsi"] }
    ] 
  },
  "special-burgers": { 
    title: "Special Burgers", 
    items: [
      { name: "Cutlet Signature", price: "1000 (S) / 1350 (C)", desc: ["Beef Patty with Double Cheese", "Fried Crispy Onions & Mushrooms", "Garlic & Cocktail Sauce", "Brioche Bun"] },
      { name: "Cutlet Premium", price: "1000(S) / 1350(C)", desc: ["Smashed Beef + Chicken Crispy Patty", "Brioche Bun", "Served with Masala Soda"] }
    ] 
  },
  "basic-burgers": { 
    title: "Basic Burgers", 
    items: [
      { name: "Smash Single", price: "650 (S) / 950 (C)", desc: ["Beef Smash Patty", "Caramelized Grilled Onions", "Signature Sauce", "Cheese"] },
      { name: "Beef Smash Mushroom", price: "750 (S) / 1050 (C)", desc: ["Beef Patty", "Creamy Mushroom Sauce", "Melted Cheese"] },
      { name: "Zinger Chicken", price: "450 (S) / 750 (C)", desc: ["Crispy Chicken", "Fresh Iceberg", "Garlic Mayo", "Pickles"] },
      { name: "Nashville Single", price: "500 (S) / 850 (C)", desc: ["Spicy Nashville Chicken", "Pickles", "Signature Mayo"] }
    ] 
  },
  "cutlet-bites": { 
    title: "Cutlet Bites", 
    items: [
      { name: "Buffalo Wings (Baked)", price: "650", desc: ["10 Pieces", "Spicy Baked Sauce"] },
      { name: "Crispy Wings (Fried)", price: "650", desc: ["10 Pieces", "Classic Fried Crunch"] },
      { name: "Chicken Tortilla Wrap", price: "350", desc: ["Crispy or Grilled Option", "Fresh Veggies & Sauce"] },
      { name: "Chicken Nuggets", price: "600", desc: ["10 Pieces", "Golden Crispy Nuggets"] },
      { name: "Extra Dips", price: "40", desc: ["Signature Dipping Sauces"] }
    ] 
  },
  "special-pizzas": {
    title: "Special Pizza",
    items: [
      { name: "Super Loaded", price: "650 / 1200 / 2000", desc: ["Extra Mozzarella & Cheddar", "Spicy Chicken & Tikka Chunks", "Pepperoni, Onions & Mushrooms"] },
      { name: "Crown Crust", price: "850 / 1200 / 2000", desc: ["Stuffed Kabab/Cheese Rim", "Premium Toppings", "Signature Pizza Sauce"] },
      { name: "Seekh Kabab Crust", price: "550 / 1150 / 1800", desc: ["Chicken Seekh Kabab in Crust", "Tikka Toppings", "Mozzarella Cheese"] }
    ]
  },
  "drinks": {
    title: "Drinks",
    items: [
      { name: "Masala Soda", price: "250 (S) / 750 (P)", desc: ["Signature Fizzy Drink", "Special Spiced Blend"] },
      { name: "Regular Cold Drink", price: "80", desc: ["250ml Chilled Selection"] }
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const categoryKey = params.category as string;
  const category = menuData[categoryKey];

  if (!category) return <div className="p-10 text-center font-bold text-[#013220]">Category Not Found</div>;

  return (
    // Add 'relative' to keep everything stacked correctly
    <div className="min-h-screen bg-[#F9FBFA] p-16 text-[#013220] relative">
      
      {/* HIGH QUALITY PIZZA BACKGROUND LAYER (Professional watermark style) */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2000&auto=format&fit=crop')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* CONTENT LAYER - Keeps everything visible and functional */}
      <div className="relative z-10">
        
        {/* Your Exact Header Setting */}
        <header className="flex justify-between items-center mb-8 bg-white/95 p-5 rounded-2xl shadow-sm border border-gray-100 sticky top-0 z-10 backdrop-blur-sm">
          <h1 className="text-2xl font-black uppercase italic tracking-tight">{category.title}</h1>
          <Link href="/menu" className="bg-[#013220] text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-[#00A86B] transition-colors">BACK</Link>
        </header>

        {/* Your Exact Item Grid Setting */}
        <div className="max-w-sm mx-auto space-y-10">
          {category.items.map((item: any, index: number) => (
            <div key={index} className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100 transform transition-all hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-black text-2xl uppercase leading-tight max-w-[70%]">{item.name}</h3>
                <div className="bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#00A86B]/20">
                  <span className="text-[#00A86B] font-black text-sm whitespace-nowrap">Rs {item.price}</span>
                </div>
              </div>

              {/* Your Exact Bullet Point Setting */}
              <ul className="space-y-4 mb-10">
                {item.desc.map((line: string, i: number) => (
                  <li key={i} className="text-[#013220] font-bold text-[16px] flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 bg-[#00A86B] rounded-full shrink-0"></div> 
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {/* Your Exact Button Setting */}
              <a 
                href={`https://wa.me/923356238176?text=I want to order: ${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-1.5 rounded-[20px] font-black uppercase tracking-[0.15em] text-sm hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200"
              >
                 Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}