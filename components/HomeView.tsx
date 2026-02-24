
import React from 'react';
import { motion } from 'motion/react';
import { CropItem } from '../types';

interface HomeViewProps {
  activeCropsCount: number;
  featuredCrop: CropItem;
  onViewCrop: (crop: CropItem) => void;
  onCreateCrop: () => void;
  onViewAllCrops: () => void;
  onViewHistory: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ 
  activeCropsCount, 
  featuredCrop, 
  onViewCrop, 
  onCreateCrop, 
  onViewAllCrops, 
  onViewHistory 
}) => {
  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A1C1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-[24px] font-black text-[#1A1C1B]">Inicio</h1>
        </div>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A1C1B]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#F5F7F6]"></div>
        </div>
      </header>

      {/* Active Crops Summary */}
      <div className="px-6 mb-8">
        <div className="bg-[#DDE4E1] p-6 rounded-[2.5rem] flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[32px] font-black text-[#1A1C1B] shadow-sm">
            {activeCropsCount}
          </div>
          <span className="text-[22px] font-black text-[#1A1C1B]">Cultivos activos</span>
        </div>
      </div>

      {/* Featured Crop Section */}
      <div className="px-6 mb-8">
        <h2 className="text-[22px] font-black text-[#1A1C1B] mb-4">Tus cultivos</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewCrop(featuredCrop)}
            className="bg-white rounded-[2.5rem] p-8 min-w-[280px] shadow-sm flex flex-col items-center"
          >
            <h3 className="text-[28px] font-black text-[#1A1C1B] mb-4">{featuredCrop.name}</h3>
            <div className="w-24 h-24 bg-[#DDE4E1] rounded-[1.5rem] flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
                <path d="M6 19H18V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V19Z" opacity="0.8" />
              </svg>
            </div>
            <span className="text-[18px] font-bold text-[#4D5D55] mb-4">365 Dias</span>
            <div className="flex items-center gap-4 w-full">
              <span className="text-[18px] font-black text-[#1A1C1B]">Etapa</span>
              <div className="bg-[#DDE4E1] px-6 py-2 rounded-full text-[16px] font-black text-[#1A1C1B]">
                {featuredCrop.phase}
              </div>
            </div>
          </motion.div>
          {/* Placeholder for next crop */}
          <div className="bg-white/50 rounded-[2.5rem] p-8 min-w-[100px] border-2 border-dashed border-gray-200"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h2 className="text-[22px] font-black text-[#1A1C1B] mb-4 text-center">Que deseas hacer?</h2>
        <div className="flex justify-center gap-3">
          <button onClick={onCreateCrop} className="bg-white px-6 py-3 rounded-2xl font-black text-[15px] text-[#1A1C1B] shadow-sm border border-gray-100">Crear cultivo</button>
          <button onClick={onViewAllCrops} className="bg-white px-6 py-3 rounded-2xl font-black text-[15px] text-[#1A1C1B] shadow-sm border border-gray-100">ver cultivos</button>
          <button onClick={onViewHistory} className="bg-white px-6 py-3 rounded-2xl font-black text-[15px] text-[#1A1C1B] shadow-sm border border-gray-100">Historial</button>
        </div>
      </div>

      {/* Risk Alert Section */}
      <div className="px-6">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6">
          <div className="w-20 h-20 bg-[#DDE4E1] rounded-[1.5rem] flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
            </svg>
            <span className="text-[12px] font-black text-[#1A1C1B]">Lechuga</span>
          </div>
          <div className="flex-grow">
            <h3 className="text-[20px] font-black text-[#1A1C1B] mb-1">Cultivo en riesgo</h3>
            <div className="flex items-center gap-2 text-[#4D5D55] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[14px] font-bold">Tu cultivo carece de riego</span>
            </div>
            <button className="bg-[#DDE4E1] px-6 py-2 rounded-full text-[14px] font-black text-[#1A1C1B]">Ver cultivo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
