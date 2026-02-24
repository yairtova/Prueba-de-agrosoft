
import React from 'react';
import { motion } from 'motion/react';

interface AIAlertsViewProps {
  onBack: () => void;
}

const AIAlertsView: React.FC<AIAlertsViewProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-6 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[24px] font-black tracking-tight">Alertas de la IA</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#4D5D55] rounded-2xl flex items-center justify-center text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="bg-[#DDE4E1] px-6 py-2 rounded-full text-[16px] font-black text-[#1A1C1B]">
            Alertas basado en tu cultivo
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 min-h-[400px] shadow-sm border border-gray-100">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[16px] font-black text-[#1A1C1B] mb-1">Falta de riego detectada</h4>
                <p className="text-[14px] text-[#4D5D55] font-medium">El nivel de humedad del suelo está por debajo del PH mínimo recomendado (5.5).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-2xl">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[16px] font-black text-[#1A1C1B] mb-1">Recomendación de fertilización</h4>
                <p className="text-[14px] text-[#4D5D55] font-medium">Se recomienda aplicar fertilizante orgánico para mejorar el crecimiento vegetativo.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIAlertsView;
