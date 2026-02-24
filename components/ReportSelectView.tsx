
import React from 'react';
import { motion } from 'motion/react';
import { EventType } from '../types';

interface ReportSelectViewProps {
  onBack: () => void;
  onSelectType: (type: EventType) => void;
}

const ReportSelectView: React.FC<ReportSelectViewProps> = ({ onBack, onSelectType }) => {
  const reportTypes: { type: EventType; label: string }[] = [
    { type: 'riego', label: 'Riego' },
    { type: 'poda', label: 'Poda' },
    { type: 'plaga', label: 'Plagas' },
    { type: 'crecimiento', label: 'Crecimiento' },
    { type: 'fertilizacion', label: 'Fetilizacion' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6]">
      <header className="px-6 pt-10 pb-4 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[22px] font-bold tracking-tight">Crear cultivo</h1>
      </header>

      <div className="px-6 mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[15px] font-bold text-[#1A1C1B]">Paso 1 de 2</span>
          <div className="flex-grow h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#8BB29E] rounded-full"></div>
          </div>
        </div>
      </div>

      <main className="flex-grow px-6 pb-24">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col">
          <h2 className="text-[22px] font-black text-center mb-8">¿Que tipo de reporte realizaras?</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {reportTypes.map((item) => (
              <motion.button
                key={item.type}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectType(item.type)}
                className="bg-[#EAF1EE] rounded-[1.5rem] p-6 flex flex-col items-center gap-3 shadow-sm"
              >
                <div className="w-16 h-16 bg-white rounded-[1rem] flex items-center justify-center text-[#4D5D55]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
                  </svg>
                </div>
                <span className="text-[16px] font-black text-[#1A1C1B]">{item.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="mt-auto">
            <button 
              className="w-full bg-[#1A1C1B] text-white py-[20px] rounded-2xl flex items-center justify-center gap-3 text-[19px] font-black shadow-xl opacity-50 cursor-not-allowed"
            >
              Continuar <span className="text-2xl font-light opacity-80">&gt;</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportSelectView;
