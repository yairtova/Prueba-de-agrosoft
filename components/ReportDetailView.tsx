
import React from 'react';
import { motion } from 'motion/react';
import { CareEvent } from '../types';

interface ReportDetailViewProps {
  event: CareEvent;
  onBack: () => void;
}

const ReportDetailView: React.FC<ReportDetailViewProps> = ({ event, onBack }) => {
  const renderDetails = () => {
    if (!event.details) return null;

    const details = event.details;

    switch (event.type) {
      case 'riego':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Cantidad</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.cantidad_agua} Litros</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Método</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.metodo_riego}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Duración</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.duracion_minutos} Minutos</span>
            </div>
          </div>
        );
      case 'fertilizacion':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Tipo</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.tipo_fertilizante}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Producto</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.nombre_fertilizante}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Cantidad</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.cantidad_aplicada} {details.unidad_medida}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Método</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.metodo_aplicacion}</span>
            </div>
          </div>
        );
      case 'fumigacion':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Producto</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.nombre_producto} ({details.tipo_producto})</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Dosis</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.dosis}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Mezcla</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.total_mezcla_litros} L</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Objetivo</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.plaga_objetivo}</span>
            </div>
          </div>
        );
      case 'poda':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Tipo</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.tipo_poda}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Porcentaje</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.porcentaje_podado}%</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Partes podadas</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.partes_podadas}</span>
            </div>
          </div>
        );
      case 'crecimiento':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Altura</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.altura_planta} cm</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Tallo</span>
              <span className="text-[16px] font-black text-[#1A1C1B]">{details.grosor_tallo} mm</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Salud</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.estado_salud}</span>
            </div>
          </div>
        );
      case 'plaga':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] p-4 rounded-2xl col-span-2">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Problema</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.tipo_irregularidad}: {details.nombre_plaga}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Daño</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.nivel_dano}</span>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-2xl">
              <span className="text-[12px] font-black text-[#4D5D55] uppercase block mb-1">Severidad</span>
              <span className="text-[16px] font-black text-[#1A1C1B] capitalize">{details.severidad}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-6 flex items-center gap-5">
        <button onClick={onBack} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[24px] font-black tracking-tight">Reporte de {event.type}</h1>
      </header>

      <main className="px-6 space-y-6">
        <h2 className="text-[22px] font-black text-center text-[#1A1C1B]">Tu reporte</h2>

        <div className="bg-white rounded-[2rem] p-6 shadow-sm flex items-center gap-5">
          <div className="w-16 h-16 bg-[#1F2923] rounded-full flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
            </svg>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[18px] font-black text-[#1A1C1B]">Tipo:</span>
              <span className="text-[18px] font-bold text-[#1A1C1B] capitalize">{event.type}</span>
              <span className="text-[14px] font-black text-[#1A1C1B] ml-2">Etapa:</span>
              <span className="text-[14px] font-bold text-[#4D5D55]">{event.phase}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-black text-[#1A1C1B]">Fecha</span>
              <div className="bg-[#DDE4E1] px-3 py-0.5 rounded-md text-[12px] font-black text-[#1A1C1B]">
                {event.date}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[20px] font-black text-[#1A1C1B]">Detalles del reporte</h3>
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
            {renderDetails()}
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-[#4D5D55] font-medium leading-relaxed">
                {event.description || 'Sin descripción adicional.'}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[20px] font-black text-[#1A1C1B]">Fotos del reporte</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white rounded-[2rem] shadow-sm border border-gray-100"></div>
            <div className="aspect-square bg-white rounded-[2rem] shadow-sm border border-gray-100"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportDetailView;
