
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import StepIndicator from './StepIndicator';
import CropOption from './CropOption';
import { CropType } from '../types';

interface CreateCropViewProps {
  onBack: () => void;
  onFinish: (crop: any) => void;
}

const CreateCropView: React.FC<CreateCropViewProps> = ({ onBack, onFinish }) => {
  const [step, setStep] = useState(1);
  const [cropType, setCropType] = useState<CropType | null>('Maiz');
  const [variety, setVariety] = useState('');
  const [terrainSize, setTerrainSize] = useState('1292942 M2');
  const [seedQuantity, setSeedQuantity] = useState('30 Kg');
  const [startDate, setStartDate] = useState('2025-02-24');

  const totalSteps = 4;

  const cropOptions: { name: CropType; label: string }[] = [
    { name: 'Maiz', label: 'Maiz' },
    { name: 'Frijol', label: 'Frijol' },
    { name: 'Lechuga', label: 'Lechuga' },
    { name: 'Otro', label: 'Otro' },
  ];

  const stages = [
    { name: 'Germinacion', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Plántula', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Crecimiento', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Floración', duration: 10, start: '25/06/24', end: '25/06/24' },
    { name: 'Cosecha', duration: 10, start: '25/06/24', end: '25/06/24' },
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onFinish({ type: cropType, variety, terrainSize, seedQuantity, startDate });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const titles = [
    'Crear cultivo',
    'Datos del cultivo',
    'Etapas del ciclo',
    'Confirmar cultivo'
  ];

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] overflow-y-auto no-scrollbar pb-32">
      <header className="px-6 pt-10 pb-4 flex items-center gap-5">
        <button onClick={handlePrev} className="w-12 h-12 bg-[#1A1C1B] rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[22px] font-bold tracking-tight">{titles[step - 1]}</h1>
      </header>

      <div className="px-6 mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[15px] font-bold text-[#1A1C1B]">Paso {step} de {totalSteps}</span>
          <StepIndicator currentStep={step} totalSteps={totalSteps} />
        </div>
      </div>

      <main className="px-6 flex-grow">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col"
            >
              <h2 className="text-[20px] font-black text-center mb-8">¿Que tipo de cultivo realizaras?</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {cropOptions.map((crop) => (
                  <CropOption
                    key={crop.name}
                    label={crop.label}
                    isSelected={cropType === crop.name}
                    onClick={() => setCropType(crop.name)}
                  />
                ))}
              </div>
              <div className="space-y-4 mb-8">
                <label className="block text-[18px] font-black text-[#1A1C1B]">Variedad (Opcional)</label>
                <input
                  type="text"
                  placeholder="Ingrese la variedad"
                  value={variety}
                  onChange={(e) => setVariety(e.target.value)}
                  className="w-full px-6 py-4 bg-white border border-[#E5E7EB] rounded-2xl text-[#1A1C1B] placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#8BB29E] transition-all text-base"
                />
              </div>
              <div className="mt-auto">
                <button onClick={handleNext} className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-[19px] font-black shadow-xl active:scale-[0.97] transition-all">
                  Continuar <span className="text-2xl font-light opacity-80">&gt;</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col"
            >
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-[#DDE4E1] rounded-[1.5rem] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
                  </svg>
                </div>
                <h2 className="text-[28px] font-black text-[#1A1C1B]">{cropType}</h2>
              </div>

              <div className="space-y-6 mb-8">
                <div className="space-y-2">
                  <label className="text-[16px] font-black text-[#1A1C1B]">Tipo de cultivo</label>
                  <input type="text" value="Hortaliza" readOnly className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[16px] font-black text-[#1A1C1B]">Tamaño de terreno</label>
                  <input type="text" value={terrainSize} onChange={(e) => setTerrainSize(e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[16px] font-black text-[#1A1C1B]">Cantidad de semillas</label>
                  <input type="text" value={seedQuantity} onChange={(e) => setSeedQuantity(e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[16px] font-black text-[#1A1C1B]">Fecha de siembra</label>
                  <div className="relative">
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full bg-[#F9FAFB] border-none rounded-2xl py-4 px-6 text-[16px] font-medium text-[#4D5D55]" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-6 top-1/2 -translate-y-1/2 text-[#4D5D55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button onClick={handleNext} className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-[19px] font-black shadow-xl active:scale-[0.97] transition-all">
                  Continuar <span className="text-2xl font-light opacity-80">&gt;</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col"
            >
              <h2 className="text-[20px] font-black text-center mb-8">Configura las etapas</h2>
              
              <div className="space-y-4 mb-8">
                {stages.map((stage, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#1A1C1B] text-white rounded-full flex items-center justify-center text-[20px] font-black shrink-0">
                        {i + 1}
                      </div>
                      {i < stages.length - 1 && <div className="w-1 h-8 bg-[#1A1C1B] my-1"></div>}
                    </div>
                    <div className="flex-grow bg-[#F9FAFB] p-4 rounded-2xl border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[18px] font-black text-[#1A1C1B]">{stage.name}</span>
                        <span className="text-[12px] font-bold text-[#4D5D55]">({stage.duration} Dias)</span>
                      </div>
                      <div className="flex gap-4 text-[12px] font-bold text-[#4D5D55]">
                        <span>Inicio <span className="text-[#1A1C1B] bg-[#DDE4E1] px-2 py-0.5 rounded">{stage.start}</span></span>
                        <span>Fin <span className="text-[#1A1C1B] bg-[#1A1C1B] text-white px-2 py-0.5 rounded">{stage.end}</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-[#DDE4E1] text-[#1A1C1B] py-3 rounded-xl font-black text-[14px] flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                  Agregar etapa
                </button>
                <button className="flex-1 bg-[#DDE4E1] text-[#1A1C1B] py-3 rounded-xl font-black text-[14px] flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Editar etapa
                </button>
              </div>

              <div className="mt-auto">
                <button onClick={handleNext} className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-[19px] font-black shadow-xl active:scale-[0.97] transition-all">
                  Continuar <span className="text-2xl font-light opacity-80">&gt;</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col"
            >
              <h2 className="text-[20px] font-black text-center mb-8">Finaliza tu cultivo</h2>
              
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-[#DDE4E1] rounded-[1.5rem] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
                  </svg>
                </div>
                <h2 className="text-[28px] font-black text-[#1A1C1B]">{cropType}</h2>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Siembra', value: '24/02/25' },
                  { label: 'Semillas', value: '80 kg' },
                  { label: 'Etapas', value: '5' },
                  { label: 'Cosecha estm.', value: '31/06/25' },
                  { label: 'Terreno', value: '15 m2' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-[18px] font-black text-[#1A1C1B]">{row.label}</span>
                    <span className="text-[18px] font-bold text-[#4D5D55]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1F2923] rounded-[2rem] p-6 text-white mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="bg-white text-[#1F2923] px-4 py-1 rounded-full text-[12px] font-black uppercase tracking-wider">
                    Primera inspeccion
                  </div>
                </div>
                <p className="text-[16px] font-bold leading-tight">
                  Comenzaré a monitorear tu cultivo desde hoy. <span className="inline-block w-5 h-5 bg-white rounded-full text-[#1F2923] text-center leading-5 text-[12px]">✓</span>
                </p>
              </div>

              <div className="space-y-4 mt-auto">
                <button onClick={handlePrev} className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-[20px] font-black shadow-xl active:scale-[0.97] transition-all">
                  ← Editar
                </button>
                <button onClick={handleNext} className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl flex items-center justify-center gap-3 text-[20px] font-black shadow-xl active:scale-[0.97] transition-all">
                  Crear cultivo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CreateCropView;

