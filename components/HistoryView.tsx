
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CareEvent } from '../types';

interface HistoryViewProps {
  onBack: () => void;
  onSelectEvent: (event: CareEvent) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onBack, onSelectEvent }) => {
  const [filter, setFilter] = useState('Todos');

  const events: CareEvent[] = [
    { 
      id: '1', 
      cropId: '1', 
      type: 'riego', 
      date: '25/06/24', 
      description: 'Riego matutino para mantener humedad.', 
      phase: 'Germinacion',
      details: {
        cantidad_agua: 50,
        metodo_riego: 'goteo',
        duracion_minutos: 30
      }
    },
    { 
      id: '2', 
      cropId: '1', 
      type: 'poda', 
      date: '24/06/24', 
      description: 'Poda de mantenimiento de hojas basales.', 
      phase: 'Crecimiento',
      details: {
        tipo_poda: 'mantenimiento',
        partes_podadas: 'Hojas basales',
        porcentaje_podado: 10
      }
    },
    { 
      id: '3', 
      cropId: '1', 
      type: 'fertilizacion', 
      date: '20/06/24', 
      description: 'Aplicación de urea para nitrógeno.', 
      phase: 'Crecimiento',
      details: {
        tipo_fertilizante: 'quimico',
        nombre_fertilizante: 'Urea',
        cantidad_aplicada: 2,
        unidad_medida: 'kg',
        metodo_aplicacion: 'edafico'
      }
    },
    { 
      id: '4', 
      cropId: '1', 
      type: 'plaga', 
      date: '18/06/24', 
      description: 'Detección de araña roja en el envés.', 
      phase: 'Crecimiento',
      details: {
        tipo_irregularidad: 'plaga',
        nombre_plaga: 'Araña roja',
        nivel_dano: 'bajo',
        severidad: 'leve'
      }
    },
  ];

  const filters = ['Todos', 'Riego', 'Poda', 'fertiliza'];

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-6 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[24px] font-black tracking-tight">Reportes</h1>
      </header>

      <div className="px-6 mb-8">
        <h2 className="text-[20px] font-black text-[#1A1C1B] mb-6">Historial de tu cultivo</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-xl font-black text-[15px] transition-all ${
                filter === f 
                  ? 'bg-[#1A1C1B] text-white' 
                  : 'bg-[#DDE4E1] text-[#4D5D55]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="px-6 space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectEvent(event)}
            className="bg-white rounded-[2rem] p-6 shadow-sm flex items-center gap-5"
          >
            <div className="w-16 h-16 bg-[#1F2923] rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[18px] font-black text-[#1A1C1B]">Tipo:</span>
                <span className="text-[18px] font-bold text-[#1A1C1B] capitalize">{event.type === 'poda' ? 'Podacion' : event.type}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] font-black text-[#1A1C1B]">Fecha</span>
                <div className="bg-[#DDE4E1] px-3 py-0.5 rounded-md text-[12px] font-black text-[#1A1C1B]">
                  {event.date}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-black text-[#1A1C1B]">Etapa:</span>
                <span className="text-[14px] font-bold text-[#4D5D55]">{event.phase}</span>
              </div>
            </div>
            <div className="w-14 h-14 bg-[#DDE4E1] rounded-xl"></div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default HistoryView;
