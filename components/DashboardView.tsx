
import React, { useState } from 'react';
import { CropItem } from '../types';
import CropCard from './CropCard';

interface DashboardViewProps {
  onCreateNew: () => void;
  onSelectCrop: (crop: CropItem) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onCreateNew, onSelectCrop }) => {
  const [filter, setFilter] = useState('Todos');

  const crops: CropItem[] = [
    { 
      id: '1', 
      name: 'Maiz rojo', 
      variety: 'Rojo', 
      type: 'Maiz', 
      startDate: '2025-01-10',
      day: 45, 
      totalDays: 90,
      progress: 35,
      status: 'Activo',
      phase: 'Germinacion',
      health: 'Buena',
      risk: 'Bajo'
    },
    { 
      id: '2', 
      name: 'Frijol bayo', 
      variety: 'Bayo', 
      type: 'Frijol', 
      startDate: '2024-06-10',
      day: 255, 
      totalDays: 300,
      progress: 85,
      status: 'Hecho',
      phase: 'Cosecha',
      health: 'Buena',
      risk: 'Bajo'
    },
    { 
      id: '3', 
      name: 'Lechuga', 
      variety: 'Serrana', 
      type: 'Lechuga', 
      startDate: '2025-01-25',
      day: 30, 
      totalDays: 60,
      progress: 50,
      status: 'Activo',
      phase: 'Crecimiento',
      health: 'Regular',
      risk: 'Medio'
    },
    { 
      id: '4', 
      name: 'Tomate', 
      variety: 'Cherry', 
      day: 14, 
      totalDays: 120,
      progress: 12,
      type: 'Tomate', 
      startDate: '2025-02-10',
      status: 'Activo',
      phase: 'Germinacion',
      health: 'Buena',
      risk: 'Bajo'
    },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 pb-32">
      {/* Header */}
      <header className="px-6 pt-10 pb-4 flex items-center gap-4">
        <div className="w-14 h-14 bg-[#EAF1EE] rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#4D5D55]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M12 2v8M12 10a4 4 0 0 1 4 4v8M12 10a4 4 0 0 0-4 4v8" />
             <path d="M12 6a4 4 0 0 0-4-4M12 6a4 4 0 0 1 4-4" />
          </svg>
        </div>
        <h1 className="text-[26px] font-bold tracking-tight text-[#1A1C1B]">Mis cultivos</h1>
      </header>

      {/* Search Bar */}
      <div className="px-6 mb-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar cultivo"
            className="w-full bg-white py-4 pl-6 pr-12 rounded-[1.2rem] shadow-sm text-[16px] border-none focus:ring-1 focus:ring-[#8BB29E] placeholder-[#9CA3AF]"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-5 top-1/2 -translate-y-1/2 text-[#1A1C1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 mb-8 flex gap-3 overflow-x-auto no-scrollbar">
        {['Todos', 'Activos', 'Hechos', ''].map((f, i) => (
          f === '' ? (
             <div key={i} className="bg-[#E5E7EB] w-14 h-11 rounded-[1rem] opacity-40 shrink-0"></div>
          ) : (
            <button
              key={i}
              onClick={() => setFilter(f)}
              className={`px-7 py-2.5 rounded-[1rem] font-bold text-[15px] transition-all whitespace-nowrap ${
                filter === f 
                  ? 'bg-[#1A1C1B] text-white' 
                  : 'bg-[#DDE4E1] text-[#4D5D55]'
              }`}
            >
              {f}
            </button>
          )
        ))}
      </div>

      {/* Summary Card */}
      <div className="px-6 mb-8">
        <div className="bg-[#E2EAE6] p-7 rounded-[2rem] flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[32px] font-extrabold shadow-sm text-[#1A1C1B]">
            9
          </div>
          <span className="text-[22px] font-bold tracking-tight text-[#1A1C1B]">Cultivos en total</span>
        </div>
      </div>

      {/* Grid */}
      <main className="px-6 flex-grow overflow-y-auto pb-10">
        <div className="grid grid-cols-2 gap-5">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} onClick={() => onSelectCrop(crop)} />
          ))}
        </div>
      </main>

      {/* FAB (Floating Action Button) */}
      <button 
        onClick={onCreateNew}
        className="fixed bottom-28 right-8 w-[72px] h-[72px] bg-[#1A1C1B] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-90 transition-transform z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v12m6-6H6" />
        </svg>
      </button>
    </div>
  );
};

export default DashboardView;
