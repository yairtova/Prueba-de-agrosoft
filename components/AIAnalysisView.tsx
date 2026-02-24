
import React from 'react';
import { motion } from 'motion/react';

interface AIAnalysisViewProps {
  onBack: () => void;
}

const AIAnalysisView: React.FC<AIAnalysisViewProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-6 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[24px] font-black tracking-tight">Analisis de la IA</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#4D5D55] rounded-2xl flex items-center justify-center text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="bg-[#DDE4E1] px-6 py-2 rounded-full text-[16px] font-black text-[#1A1C1B]">
            Mi analisis basado en tu cultivo
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 min-h-[400px] shadow-sm border border-gray-100">
          <div className="space-y-6">
            <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
            <div className="h-4 bg-gray-100 rounded-full w-full"></div>
            <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
            <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
            <div className="h-4 bg-gray-100 rounded-full w-full"></div>
            <div className="h-4 bg-gray-100 rounded-full w-4/5"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIAnalysisView;
